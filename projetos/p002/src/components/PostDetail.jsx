// Import Component Style Module
import styles from './PostDetail.module.css';

// Import React
import { Link } from 'react-router-dom';

const PostDetail = ({post}) => {
    const capitalizeTitle = (title) => {
        return title
            .split(' ')
            .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <div className={styles.PostDetail}>
                <div>
                    <div className={styles.imageContainer}>
                        <img src={post.image} alt={post.title} title={post.title}/>
                    </div>
                    
                    <div className={styles.infoContainer}>
                        <h2>{capitalizeTitle(post.title)}</h2>
                        <p className={styles.createdBy}>{post.createdBy}</p>
                    </div>

                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>{tag}
                            </p>
                        ))}
                    </div>

                    <div className={styles.linkContainer}>
                        <Link to={`/posts/${post.id}`} className="btn btn-outline" >Read</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetail;