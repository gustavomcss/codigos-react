// Import Style Module Page
import styles from './Photo.module.css';

// Import Utils
import { upload } from '../../utils/config';

// Import React Libs
import { useState, useEffect } from 'react';

// Import React Router DOM
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { getPhoto, likePhoto, commentPhoto } from '../../slices/photoSlice';

// Import Hooks
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';

// Import Components
import Loading from '../Loading/Loading';
import Message from '../../components/Message';
import PhotoItem from '../../components/PhotoItem';
import LikeContainer from '../../components/LikeContainer';

const Photo = () => {
    // Get id from URL Params
    const { id } = useParams();

    const [commentText, setCommentText] = useState("");

    // Allows to use the Redux Store Functions
    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    // Get Data and Control Flags from Redux Store
    const { user: userAuth } = useSelector((state) => state.auth);
    const { photo, loading, error, message } = useSelector((state) => state.photo);

    // Function Like
    const handleLike = () => {
        dispatch(likePhoto(photo._id));

        resetMessage();
    };

    // Function Comment
    const handleComment = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        // Creation of Comment Object
        const commentData = {
            comment: commentText,
            id: photo._id
        };

        dispatch(commentPhoto(commentData));

        setCommentText("");

        resetMessage();
    };

    // Get Photo Data
    useEffect(() => {
        dispatch(getPhoto(id));
    }, [dispatch, id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className={styles.Photo}>
                <PhotoItem photo={photo} />
                <LikeContainer photo={photo} user={userAuth} handleLike={handleLike} />

                <div className={styles.comments}>
                    {photo.comments && (
                        <>
                            <h3>Comments: ({photo.comments.length})</h3>

                            {photo.comments.length === 0 && (
                                <p>No comments yet...</p>
                            )}
                            {photo.comments.map((comment) => (
                                <div className={styles.comment} key={comment.comment}>
                                    <div className={styles.author}>
                                        {comment.userImage && (
                                            <img src={`${upload}/users/${comment.userImage}`} alt={comment.userName} />
                                        )}

                                        <Link to={`/users/${comment.userId}`}>
                                            <p>{comment.userName}</p>
                                        </Link>
                                    </div>
                                    <p>{comment.comment}</p>
                                </div>
                            ))}

                            <form onSubmit={handleComment}>
                                <input type="text" placeholder="Enter a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)} />

                                <input className="btn" type="submit" value="Send" />

                                <div className={styles.messageContainer}>
                                    {error &&
                                        <Message msg={error} type="error" />
                                    }
                                    {message &&
                                        <Message msg={message} type="success" />
                                    }
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Photo;