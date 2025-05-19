import React, { useMemo } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    const mainMovie = useMemo(() => {
        if (!movies || movies.length === 0) return <LoadingPage/>;
        const index = Math.floor(Math.random() * movies.length);
        return movies[index];
    }, [movies]);
    
 
    if (!mainMovie) return <LoadingPage/>;
    const { id, original_title, overview } = mainMovie;

    return (
        <div className='bg-gray-700'>
            <VideoTitle title={original_title} description={overview} id={id}/>
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer;