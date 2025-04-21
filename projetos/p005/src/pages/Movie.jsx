// Import Styles Page
import './Movie.css';

// Import React Icons
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';

// Import React Libs
import { useState, useEffect } from 'react';

// Import React Router DOM
import { useParams } from 'react-router-dom';

// Import Components
import MovieCard from '../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    };

    useEffect(() => {
        const movieURL = `${moviesURL}/${id}?api_key=${apiKey}`;

        getMovie(movieURL);
    }, []);

    return (
        <>
            <div className="Movie">
                {movie && (
                    <>
                        <MovieCard movie={movie} showLink={false} />

                        <p className="tagline">{movie.tagline}</p>

                        <div className="info">
                            <h3><BsWallet2 /> Budget:</h3>
                            <p>{formatCurrency(movie.budget)}</p>
                        </div>
                        <div className="info">
                            <h3><BsGraphUp /> Revenue:</h3>
                            <p>{formatCurrency(movie.revenue)}</p>
                        </div>
                        <div className="info">
                            <h3><BsHourglassSplit /> Runtime:</h3>
                            <p>{movie.runtime} minutes</p>
                        </div>
                        <div className="info description">
                            <h3><BsFillFileEarmarkTextFill /> Overview:</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Movie;