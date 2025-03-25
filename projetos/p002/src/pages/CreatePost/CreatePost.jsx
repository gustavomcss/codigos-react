// Import Page Style Module
import styles from './CreatePost.module.css';

// Import React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Context
import { useAuthValue } from '../../context/AuthContext';

// Import Hooks
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const {user} = useAuthValue();

    const {insertDocument, response} = useInsertDocument("posts");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        try {
            new URL(image);
        } catch (error) {
            setFormError("Invalid image URL");
            return;
        }

        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        if (!title || !image || !body || !tags) {
            setFormError("All fields are required. Please, fill all fields.");
        }

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        });

        navigate("/");
    };
    
    return (
        <>
            <div className={styles.CreatePost}>
                <h1>Create Post</h1>
                <p>Write about anything you want and share your knowledge!</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Title:</span>
                        <input type="text" name="title" placeholder="Write a nice title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                    <label>
                        <span>Image URL:</span>
                        <input type="text" name="image" placeholder="Choose an image to your post" value={image} onChange={(e) => setImage(e.target.value)} required />
                    </label>
                    <label>
                        <span>Body Content:</span>
                        <textarea name="body" placeholder="Insert post content" value={body} onChange={(e) => setBody(e.target.value)} required ></textarea>
                    </label>
                    <label>
                        <span>Tags:</span>
                        <input type="text" name="tags" placeholder="Write your tags separated by commas" value={tags} onChange={(e) => setTags(e.target.value)} required />
                    </label>

                    {!response.loading && <button className="btn">Publish</button>}
                    {response.loading && <button className="btn" disabled>Wait...</button>}

                    {response.error && <p className="error">{response.error}</p>}

                    {formError && <p className="error">{formError}</p>}
                </form>
            </div>
        </>
    );
};

export default CreatePost;