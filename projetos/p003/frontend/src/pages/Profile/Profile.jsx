// Import Style Module Page
import styles from './Profile.module.css';

// Import React Icons
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';

// Import Utils
import { upload } from '../../utils/config';

// Import React Libs
import { useState, useEffect, useRef } from 'react';

// Import React Router DOM
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { getUser } from '../../slices/userSlice';
import { publish, getUserPhotos, deletePhoto, updatePhoto, resetMessage } from '../../slices/photoSlice';

// Import Hooks
import { useAuth } from '../../hooks/useAuth';

// Import Components
import Loading from '../Loading/Loading';
import Message from '../../components/Message';

const Profile = () => {
    // Get id from URL Params
    const { id } = useParams();

    // State for Form Inputs
    const [title, setTitle] = useState(undefined);
    const [image, setImage] = useState(undefined);

    const [editId, setEditId] = useState(undefined);
    const [editTitle, setEditTitle] = useState(undefined);
    const [editImage, setEditImage] = useState(undefined);

    // Allows to use the Redux Store Functions
    const dispatch = useDispatch();

    // Get Data and Control Flags from Redux Store
    const { user, loading } = useSelector((state) => state.user);
    const { user: userAuth } = useSelector((state) => state.auth);
    const { photos, message: messagePhoto, loading: loadingPhoto, error } = useSelector((state) => state.photo);

    // New Form and Edit Form Refs
    const newPhotoForm = useRef(null);
    const editPhotoForm = useRef(null);

    // Delay to Message Disappear
    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage());
        }, 3000);
    };

    const handleSubmit = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        // Creation of Photo Object
        const photo = {
            title,
            image
        };

        // Build FormData Object to Send Image
        const formData = new FormData();

        Object.keys(photo).forEach((key) => {
            formData.append(key, photo[key]);
        });

        dispatch(publish(formData));

        setTitle(undefined);
        setImage(undefined);

        resetComponentMessage();
    };

    const handleFile = (e) => {
        const image = e.target.files[0];
        setImage(image);
    };

    const handleDelete = (id) => {
        dispatch(deletePhoto(id));

        resetComponentMessage();
    };

    const hideOrShowForms = () => {
        newPhotoForm.current.classList.toggle("hide");
        editPhotoForm.current.classList.toggle("hide");
    };

    const handleEdit = (photo) => {
        if (editPhotoForm.current.classList.contains("hide")) {
            hideOrShowForms();
        }

        setEditId(photo._id);
        setEditTitle(photo.title);
        setEditImage(photo.image);
    };

    const handleUpdate = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        const photoData = {
            id: editId,
            title: editTitle
        }

        dispatch(updatePhoto(photoData));

        resetComponentMessage();
    };

    const handleCancelEdit = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        hideOrShowForms();
    };

    // Get User Data
    useEffect(() => {
        dispatch(getUser(id));
        dispatch(getUserPhotos(id));
    }, [dispatch, id, messagePhoto]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className={styles.Profile}>
                <div className={styles.profileHeader}>
                    {user.profileImage && (
                        <img className={styles.profileImg} src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                    )}

                    {!(user.profileImage) && (
                        <img className={styles.profileImgX} src={null} alt={user.name} />
                    )}

                    <div className={styles.profileDescription}>
                        <h2>{user.name}</h2>
                        <p>{user.bio}</p>
                    </div>
                </div>

                {id === userAuth._id && (
                    <>
                        <div className={styles.newPhoto} ref={newPhotoForm}>
                            <h3>Share your moment with everyone!</h3>

                            <form onSubmit={handleSubmit}>
                                <label>
                                    <span>Post Title:</span>
                                    <input type="text" placeholder="Photo Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </label>
                                <label>
                                    <span>Post Image (.PNG or .JPG):</span>
                                    <input type="file" onChange={handleFile} />
                                </label>

                                {!loadingPhoto &&
                                    <input className="btn" type="submit" value="Post" />
                                }
                                {loadingPhoto &&
                                    <input className="btn" type="submit" value="Wait..." disabled />
                                }

                                {error &&
                                    <Message msg={error} type="error" />
                                }
                                {messagePhoto &&
                                    <Message msg={messagePhoto} type="success" />
                                }
                            </form>
                        </div>

                        <div className={`${styles.editPhoto} hide`} ref={editPhotoForm}>
                            <h3>Editing Photo:</h3>
                            {editImage && (
                                <img src={`${upload}/photos/${editImage}`} alt={editTitle} />
                            )}

                            <form onSubmit={handleUpdate}>
                                <label>
                                    <span>NEW Post Title:</span>
                                    <input type="text" placeholder="NEW Photo Title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                </label>

                                <input className="btn" type="submit" value="Atualizar" />
                                <button className="btnCancel" onClick={handleCancelEdit}>Cancel Edit</button>
                            </form>
                        </div>
                    </>
                )}

                <div className={styles.userPhotos}>
                    <h3>Published Photos</h3>

                    <div className={styles.photosContainer}>
                        {photos && photos.map((photo) => (
                            <div className={styles.photo} key={photo._id}>
                                {photo.image && (
                                    <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
                                )}
                                {id === userAuth._id ? (
                                    <div className={styles.actions}>
                                        <Link to={`/photos/${photo._id}`}>
                                            <BsFillEyeFill />
                                        </Link>
                                        <BsPencilFill onClick={() => handleEdit(photo)} />
                                        <BsXLg onClick={() => handleDelete(photo._id)} />
                                    </div>
                                ) : (
                                    <Link to={`/photos/${photo._id}`}><BsFillEyeFill /></Link>
                                )}
                            </div>
                        ))}

                        {photos.length === 0 && (
                            <p className={styles.noPhotos}>No photos published yet!</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;