import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/langConstrants";
import gemini from "../utils/gemini";
import { API_OPTION, GET_MOVIE_BY_NAME_API } from "../utils/constrants";
import { updateSearchResult } from "../utils/gptSlice";
import MovieList from "./MovieList";
import LoadingPage from "./LoadingPage";

const AiPage = () => {
    const langKey = useSelector((store) => store.userConfig.config.lang);
    const { searchResult, gptMovies } = useSelector((store) => store.gpt);
    const dispatch = useDispatch();

    const searchText = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getMovieFromTMDB = async (movie) => {
        try {
            const response = await fetch(GET_MOVIE_BY_NAME_API + movie, API_OPTION);
            const json = await response.json();
            return json.results || [];
        } catch (err) {
            console.error("TMDB API error:", err);
            return [];
        }
    };

    const handleGeminiSearchClick = async () => {
        const query = searchText.current.value.trim();
        if (!query) {
            setError("Please enter a search term.");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: "${query}". Only give me name of 3 movies, comma separated. Example: Movie 1, Movie 2, Movie 3`;

            const result = await gemini.generateContent(prompt);
            const response = await result.response;
            const text = response.text().trim();

            const movieNameArray = text.split(",").map(name => name.trim()).filter(Boolean);
            const promiseArray = movieNameArray.map((movie) => getMovieFromTMDB(movie));
            const movieListArray = await Promise.all(promiseArray);

            dispatch(updateSearchResult({
                movieName: movieNameArray,
                movieList: movieListArray,
            }));
        } catch (err) {
            console.error("Gemini error:", err);
            setError("Something went wrong while fetching recommendations.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pt-20 flex justify-center items-center bg-darkBlue h-screen w-screen text-white">
            <div className="flex flex-col-reverse items-center justify-start gap-8 p-2 overflow-hidden h-2/3 md:h-5/6 w-full md:w-2/3">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex justify-center gap-4 w-full"
                >
                    <input
                        type="text"
                        ref={searchText}
                        placeholder={lang[langKey]?.gptInputPlaceholder || "Type your query"}
                        className="bg-black py-2 px-4 rounded-lg w-2/3 md:w-1/2 outline-none"
                    />
                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50"
                        onClick={handleGeminiSearchClick}
                        disabled={isLoading}
                    >
                        {isLoading ? "Searching..." : (
                            <>
                                {lang[langKey]?.gptSendBtn || "Send"}
                            </>
                        )}
                    </button>
                </form>

                {error && (
                    <p className="text-red-500 text-sm w-full text-center">{error}</p>
                )}

                <div className="overflow-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-700 w-full">
                    <div className="p-4">
                        {gptMovies?.length > 0 && searchResult?.length > 0 &&
                            gptMovies.map((movie, index) => (
                                <MovieList
                                    key={index}
                                    title={searchResult[index]}
                                    movies={movie}
                                />
                            ))}
                    </div>
                    {isLoading && <LoadingPage />}
                </div>
            </div>
        </div>
    );
};

export default AiPage;
