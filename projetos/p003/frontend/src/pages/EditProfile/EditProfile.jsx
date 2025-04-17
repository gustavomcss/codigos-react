// Import Style Module Page
import styles from './EditProfile.module.css';

// Import Utils
import { upload } from '../../utils/config';

// Import React Hooks
import { useState, useEffect } from 'react';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { profile, updateProfile, resetMessage } from "../../slices/userSlice";

// Import Components
import Message from '../../components/Message';

const EditProfile = () => {
    // State for Form Inputs
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [previewImage, setPreviewImage] = useState(undefined);
    const [profileImage, setProfileImage] = useState(undefined);
    const [bio, setBio] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    // Allows to use the Redux Store Functions
    const dispatch = useDispatch();

    // Get Data and Control Flags from Redux Store
    const { user, message, loading, error } = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        // Creation of User Object + Check Inputs
        const user = {
            name
        };

        if (profileImage) {
            user.profileImage = profileImage;
        }

        if (bio) {
            user.bio = bio;
        }

        if (password) {
            user.password = password;
        }

        // Build FormData Object to Send Image
        const formData = new FormData();

        Object.keys(user).forEach((key) => {
            formData.append(key, user[key]);
        });

        dispatch(updateProfile(formData));

        // Delay to Message Disappear
        setTimeout(() => {
            dispatch(resetMessage());
        }, 5000);
    };

    const handleFile = (e) => {
        const image = e.target.files[0];
        setPreviewImage(image);
        setProfileImage(image);
    };

    // Get User Profile
    useEffect(() => {
        dispatch(profile());
    }, [dispatch]);

    // Fill Form Inputs with User Profile
    useEffect(() => { 
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setBio(user.bio);
            console.log(user.bio);
        }
    }, [user]);

    return (
        <>
            <div className={styles.EditProfile}>
                <h2>Update User</h2>
                <p className={styles.subtitle}>Add a profile image and tell more about you...</p>

                {(user.profileImage || previewImage) && (
                    <img className={styles.profileImg}
                        src={previewImage
                            ? URL.createObjectURL(previewImage)
                            : `${upload}/users/${user.profileImage}`
                        }
                        alt={user.name}
                    />
                )}

                {!(user.profileImage || previewImage) && (
                    <img className={styles.profileImgX} src={null} alt={user.name} />
                )}

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} disabled />

                    <label>
                        <span>Profile Image:</span>
                        <input type="file" onChange={handleFile} />
                    </label>
                    <label>
                        <span>Bio:</span>
                        <input type="text" placeholder="Profile Description" value={bio} onChange={(e) => setBio(e.target.value)} />
                    </label>
                    <label>
                        <span>Change Password:</span>
                        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    {!loading &&
                        <input className="btn" type="submit" value="Update" />
                    }
                    {loading &&
                        <input className="btn" type="submit" value="Wait..." disabled />
                    }

                    {error &&
                        <Message msg={error} type="error" />
                    }
                    {message &&
                        <Message msg={message} type="success" />
                    }
                </form>
            </div>
        </>
    );
};

export default EditProfile;