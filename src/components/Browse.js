import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Error from "./Error";

const Browse = () => {
    const { hasNowPlayingError } = useNowPlayingMovies();
    const { hasPopularError } = usePopularMovies();
    const { hasTopRatedError } = useTopRatedMovies();
    const { hasUpcomingError } = useUpcomingMovies();

    const hasError =
        hasNowPlayingError ||
        hasPopularError ||
        hasTopRatedError ||
        hasUpcomingError;

    return hasError ? (
        <Error />
    ) : (
        <div>
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
