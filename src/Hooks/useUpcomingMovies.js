import { useEffect, useState } from "react";
import { API_OPTION, UPCOMING_MOVIE_API } from "../utils/constrants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const [hasUpcomingError, setHasUpcomingError] = useState(false);
    const movies = useSelector((store) => store.movies.upcomingMovies);
    useEffect(() => {
        if (movies?.length > 0) return;
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const data = await fetch(UPCOMING_MOVIE_API, API_OPTION);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Error fetching upcoming movies " + error);
            setHasUpcomingError(true);
        }
    };
    return {hasUpcomingError};
};

export default useUpcomingMovies;
