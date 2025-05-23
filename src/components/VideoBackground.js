import React from 'react';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ id }) => {
    const trailerDetails = useMovieTrailer(id);
    return (
        <div className='relative w-screen h-screen overflow-hidden bg-gray-700'>
            <iframe className='fixed top-0 left-0 w-full h-full object-cover scale-150'
                src={"https://www.youtube.com/embed/" + trailerDetails?.key + "?autoplay=1&mute=1&loop=1&controls=0&playlist=" + trailerDetails?.key}
                frameBorder="0" title='none' allow="autoplay; encrypted-media" allowFullScreen></iframe>

            <div className='bg-gradient-to-r from-black inset-0 fixed'></div>
        </div>
    )
}

export default React.memo(VideoBackground);