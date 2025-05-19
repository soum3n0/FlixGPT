import { useEffect, useState } from "react";
import { API_OPTION, GET_MOVIE_BY_ID } from "../utils/constrants";

const cache = {};

const useMovieDetails = (id) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const getMovieDetails = async () => {
        try {
            const data = await fetch(GET_MOVIE_BY_ID + id, API_OPTION);
            const json = await data.json();
            setMovieDetails(json);
            cache[id] = json;
        } catch (error) {
            console.error("Error fetching movie details : " + error);
        }
    };
    useEffect(() => {
        if (!id) return;
        if (cache[id]) {
            setMovieDetails(cache[id]);
        } else {
            getMovieDetails();
        }
    }, [id]);
    return movieDetails;
};

export default useMovieDetails;
