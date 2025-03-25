// Import Page Style Module
import styles from './Post.module.css';

// Import Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocument("posts", id);

    const capitalizeTitle = (title) => {
        return title
            .split(' ')
            .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <div className={styles.Post}>
                {loading && <p>Loading...</p>}

                {post && (
                    <>
                        <h1>{capitalizeTitle(post.title)}</h1>
                        <div className={styles.infoContainer}>
                            <p className={styles.createdBy}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>{post.createdBy}</p>
                            <p className={styles.createdAt}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>{post.createdAt}</p>
                        </div>                        
                        
                        <div className={styles.imageContainer}>
                            <img src={post.image} alt={post.title} title={post.title}/>
                        </div>
                        <p>{post.body}</p>

                        <div className={styles.tags}>
                            {post.tagsArray.map((tag) => (
                                <p key={tag}>
                                    <span>#</span>{tag}
                                </p>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Post;