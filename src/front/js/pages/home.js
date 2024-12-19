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
			{/* <div>
				{store.movies.map((movie) => {
					
				})}
			</div> */}
			
		</div>
	);
};
