import { useEffect, useState } from "react"
import { API_OPTION, POPULAR_MOVIE_API } from "../utils/constrants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const [hasPopularError, setHasPopularError] = useState(false);
    const movies = useSelector((store) => store.movies.popularMovies);
    
    useEffect(()=>{
        if (movies?.length > 0) return;
        getMovies();
    },[]);

    const getMovies = async ()=>{
        try{
        const data = await fetch(POPULAR_MOVIE_API, API_OPTION);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
        }catch(error){
            console.error("Error fetching popular movies : "+error);
            setHasPopularError(true);
        }
    }
    return {hasPopularError};
}

export default usePopularMovies;