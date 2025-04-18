// Import Style Module Page
import styles from './Home.module.css';

// Import React Libs
import { useEffect } from 'react';

// Import React Router DOM
import { Link } from 'react-router-dom';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { likePhoto, getPhotos } from '../../slices/photoSlice';

// Import Hooks
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';

// Import Components
import Loading from '../Loading/Loading';
import LikeContainer from '../../components/LikeContainer';
import PhotoItem from '../../components/PhotoItem';

const Home = () => {
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
        dispatch(getPhotos());
    }, [dispatch]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className={styles.Home}>
                {photos && photos.map((photo) => (
                    <div key={photo._id}>
                        <PhotoItem photo={photo} />

                        <LikeContainer photo={photo} user={userAuth} handleLike={handleLike} />

                        <Link className="btn" to={`/photos/${photo._id}`} >See More</Link>
                    </div>
                ))}

                {photos && photos.length === 0 && (
                    <div className={styles.noPhotos}>
                        <h2>There aren't any photos yet. <Link to={`/users/${userAuth._id}`}>New Post</Link></h2>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;