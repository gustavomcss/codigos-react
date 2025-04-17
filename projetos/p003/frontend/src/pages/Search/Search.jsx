// Import Style Module Page
import styles from './Search.module.css';

// Import React Libs
import { useEffect } from 'react';

// Import React Router DOM
import { Link } from 'react-router-dom';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { searchPhotos, likePhoto } from '../../slices/photoSlice';

// Import Hooks
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';
import { useQuery } from '../../hooks/useQuery';

// Import Components
import Loading from '../Loading/Loading';
import LikeContainer from '../../components/LikeContainer';
import PhotoItem from '../../components/PhotoItem';

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    // Allows to use the Redux Store Functions
    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    // Get Data and Control Flags from Redux Store
    const { user: userAuth } = useSelector((state) => state.auth);
    const { photos, loading } = useSelector((state) => state.photo);

    // Function Like
    const handleLike = (photo) => {
        dispatch(likePhoto(photo._id));

        resetMessage();
    };

    // Get Photos Data
    useEffect(() => {
        dispatch(searchPhotos(search));
    }, [dispatch, search]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className={styles.Search}>
                <h2>You are searching for: <span>{search}</span></h2>

                {photos && photos.map((photo) => (
                    <div key={photo._id}>
                        <PhotoItem photo={photo} />

                        <LikeContainer photo={photo} user={userAuth} handleLike={handleLike} />

                        <Link className="btn" to={`/photos/${photo._id}`} >See More</Link>
                    </div>
                ))}

                {photos && photos.length === 0 && (
                    <div className={styles.noPhotos}>
                        <h2>No results found for your search</h2>
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;