import { useEffect, useState } from "react"
import { API_OPTION, TOP_RATED_MOVIE_API } from "../utils/constrants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const [hasTopRatedError, setHasTopRatedError] = useState(false);
    const movies = useSelector((store) => store.movies.topRatedMovies);
    useEffect(()=>{
        if (movies?.length > 0) return;
        getMovies();
    }, []);

    const getMovies = async () =>{
        try{
        const data = await fetch(TOP_RATED_MOVIE_API, API_OPTION);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
        }catch(error){
            console.error("Error fetching top rated movies: ", error);
            setHasTopRatedError(true);
        }
    }
    return {hasTopRatedError};
}

export default useTopRatedMovies;