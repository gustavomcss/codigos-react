// Import Styles Page
import './Search.css';

// Import React Libs
import { useState, useEffect } from 'react';

// Import React Router DOM
import { useSearchParams } from 'react-router-dom';

// Import Components
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [movies, setMovies] = useState([]);

    const [searchParams] = useSearchParams("q");

    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
    }, [query]);

    return (
        <>
            <div className="Search">
                <h2 className="title">Results for: <span className="query-text">{query}</span></h2>

                <div className="movies-container">
                    {movies.length === 0 && (
                        <p>Loading...</p>
                    )}

                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Search;