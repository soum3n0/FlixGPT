import { useEffect, useState } from "react";
import { API_OPTION, NOW_PLAYING_MOVIE_API } from "../utils/constrants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const [hasNowPlayingError, setHasNowPlayingError] = useState(false);
    const movies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(NOW_PLAYING_MOVIE_API, API_OPTION);
            console.log(data);
            const json = await data.json();
            console.log(json);
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching now playing movies : " + error);
            setHasNowPlayingError(true);
        }
    };

    useEffect(() => {
        if (movies?.length > 0) return;
        getNowPlayingMovies();
    }, []);
    return { hasNowPlayingError };
};

export default useNowPlayingMovies;
