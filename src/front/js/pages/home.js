import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getMovies()
	}, [])

	return (
		<div className="text-center mt-5">
			<div>
				{store.movies?.results?.map((movie, index) => (
					<div key={index} className="movie-card">
						<h3>{movie.title}</h3>
						<p>{movie.overview}</p>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							style={{ width: "200px", height: "300px" }}
						/>
					</div>
				))}

				{/* {store.movies?.results?.length ? (
					store.movies.results.map((movie, index) => (
						<div key={index} className="movie-card">
							<h3>{movie.title}</h3>
							<p>{movie.overview}</p>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								style={{ width: "200px", height: "300px" }}
							/>
						</div>
					))
				) : (
					<p>Loading movies...</p>
				)} */}
			</div>
		</div>
	);
};
