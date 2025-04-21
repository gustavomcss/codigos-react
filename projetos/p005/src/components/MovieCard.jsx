// Import Styles Component
import './MovieCard.css';

// Import React Icons
import { FaStar } from 'react-icons/fa';

// Import React Router DOM
import { Link } from 'react-router-dom';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
    return (
        <>
            <div className="MovieCard">
                <img src={`${imageURL}/${movie.poster_path}`} alt={movie.title} />

                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>
                        <FaStar />{movie.vote_average}
                    </p>
                </div>

                {showLink && (
                    <Link to={`/movie/${movie.id}`}>Details</Link>
                )}
            </div>
        </>
    );
};

export default MovieCard;