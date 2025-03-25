// Import Page Style Module
import styles from './EditPost.module.css';

// Import React
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Import Context
import { useAuthValue } from '../../context/AuthContext';

// Import Hooks
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const EditPost = () => {
    const {id} = useParams();
    const {document: post} = useFetchDocument("posts", id);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(", ");
            setTags(textTags);
        }
    }, [post])


    const {user} = useAuthValue();

    const {updateDocument, response} = useUpdateDocument("posts");

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

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        navigate("/dashboard");
    };

    const capitalizeTitle = (title) => {
        return title
            .split(' ')
            .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <div className={styles.EditPost}>
                {post && (
                    <>
                        <h1>Edit Post: <span>{capitalizeTitle(post.title)}</span></h1>
                        <p>Change the post data as you wish</p>

                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>Title:</span>
                                <input type="text" name="title" placeholder="Write a nice title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </label>
                            <label>
                                <span>Image URL:</span>
                                <input type="text" name="image" placeholder="Choose an image to your post" value={image} onChange={(e) => setImage(e.target.value)} required />
                            </label>

                            <p className={styles.previewTitle}>Preview of Current Image</p>
                            <img className={styles.previewImage} src={post.image} alt={post.title} title={post.title}/>

                            <label>
                                <span>Body Content:</span>
                                <textarea name="body" placeholder="Insert post content" value={body} onChange={(e) => setBody(e.target.value)} required ></textarea>
                            </label>
                            <label>
                                <span>Tags:</span>
                                <input type="text" name="tags" placeholder="Write your tags separated by commas" value={tags} onChange={(e) => setTags(e.target.value)} required />
                            </label>

                            {!response.loading && <button className="btn">Edit</button>}
                            {response.loading && <button className="btn" disabled>Wait...</button>}

                            {response.error && <p className="error">{response.error}</p>}

                            {formError && <p className="error">{formError}</p>}
                        </form>
                    </>
                )}
            </div>
        </>
    );
};

export default EditPost;