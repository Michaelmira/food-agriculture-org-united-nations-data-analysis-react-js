const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getMovies: async () => {
				console.log("BACKEND_URL:", process.env.BACKEND_URL);
				console.log("API_TOKEN:", process.env.REACT_APP_TMDB_API_TOKEN);
				console.log("API_KEY:", process.env.REACT_APP_TMDB_API_KEY);
				const response = await fetch(process.env.BACKEND_URL + "/discover/movie", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_TOKEN,
						// "x-api-key": process.env.REACT_APP_TMDB_API_KEY
					}
				})
				const data = await response.json()
				setStore({ movies: data })
				return data
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
