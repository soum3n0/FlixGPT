import { useEffect, useState } from "react";
import { API_OPTION, NOW_PLAYING_MOVIE_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const [hasNowPlayingError, setHasNowPlayingError] = useState(false);

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
        getNowPlayingMovies();
    }, []);
    return { hasNowPlayingError };
};

export default useNowPlayingMovies;
