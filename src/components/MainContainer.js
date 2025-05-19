import React, { useMemo, lazy, Suspense } from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";
const VideoBackground = lazy(() => import("./VideoBackground"));

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    const mainMovie = useMemo(() => {
        if (!movies || movies.length === 0) return <LoadingPage />;
        const index = Math.floor(Math.random() * movies.length);
        return movies[index];
    }, [movies]);

    if (!mainMovie) return <LoadingPage />;
    const { id, original_title, overview } = mainMovie;

    return (
        <div className="bg-gray-700">
            <VideoTitle title={original_title} description={overview} id={id} />
            <Suspense fallback={<LoadingPage/>}>
                <VideoBackground id={id} />
            </Suspense>
        </div>
    );
};

export default MainContainer;
