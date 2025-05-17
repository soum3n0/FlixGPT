import { useEffect, useState } from "react";
import { API_OPTION, GET_MOVIE_BY_ID } from "../utils/constrants";

const useMovieDetails = (id) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const getMovieDetails = async () => {
        try {
            const data = await fetch(GET_MOVIE_BY_ID + id, API_OPTION);
            const json = await data.json();
            setMovieDetails(json);
        } catch (error) {
            console.error("Error fetching movie details : "+ error);
        }
    };
    useEffect(() => {
        getMovieDetails();
    }, []);
    return movieDetails;
};

export default useMovieDetails;
