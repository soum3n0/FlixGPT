import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="text-white p-6">
            <h2 className="text-3xl font-bold p-4">{title}</h2>
            <div className="flex overflow-x-scroll scrollbar-none h-80 items-center">
                {Array.isArray(movies) && movies.length > 0 ? (
                    <div className="flex gap-5">
                        {movies?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <span className="text-gray-300 pl-5">No movies available.</span>
                )}
            </div>
        </div>
    );
};

export default React.memo(MovieList);
