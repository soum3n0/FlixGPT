import { useEffect, useState } from "react"
import { API_OPTION, TOP_RATED_MOVIE_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const [hasTopRatedError, setHasTopRatedError] = useState(false);
    useEffect(()=>{
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