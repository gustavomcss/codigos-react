// Import Styles Page
import './Home.css';

// Import React Libs
import { useState, useEffect } from 'react';

// Import Components
import MovieCard from '../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedURL = `${moviesURL}/top_rated?api_key=${apiKey}`;

        getTopRatedMovies(topRatedURL);
    }, []);

    return (
        <>
            <div className="Home">
                <h2 className="title">Top Rated Movies</h2>

                <div className="movies-container">
                    {topMovies.length === 0 && (
                        <p>Loading...</p>
                    )}

                    {topMovies.length > 0 &&
                        topMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Home;