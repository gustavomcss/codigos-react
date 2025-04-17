// Import Style Module Page
import styles from './PhotoItem.module.css';

// Import React Icons
import { BsLink45Deg } from "react-icons/bs";

// Import Utils
import { upload } from '../utils/config';

// Import React Router DOM
import { Link } from 'react-router-dom';

const PhotoItem = ({ photo }) => {
    return (
        <>
            <div className={styles.PhotoItem}>
                {photo.image && (
                    <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
                )}
                
                <h2>{photo.title}</h2>
                <p className={styles.photoAuthor}>
                    Published by: <Link to={`/users/${photo.userId}`}>{photo.userName}</Link> <BsLink45Deg />
                </p>
            </div>
        </>
    );
};

export default PhotoItem;