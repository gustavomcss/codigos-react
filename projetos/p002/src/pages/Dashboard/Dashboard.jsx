// Import Page Style Module
import styles from './Dashboard.module.css';

// Import React
import { Link } from 'react-router-dom';

// Import Hooks
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: posts, loading, error} = useFetchDocuments("posts", null, uid);

    const {deleteDocument} = useDeleteDocument("posts");

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className={styles.Dashboard}>
                <h1>Dashboard</h1>
                <p>Manage your posts</p>

                {posts && posts.length === 0 ? (
                    <div>
                        <p>You have no posts yet</p>
                        <Link className="btn" to="/posts/create">Create Post</Link>
                    </div>
                ) : (
                    <>
                        <div className={styles.postHeader}>
                            <span>Titles</span>
                            <span>Action</span>
                        </div>

                        {posts && posts.map((post) => (
                            <div key={post.id} className={styles.postRow}>
                                <p>{post.title}</p>
                                <div className={styles.actions}>
                                    <Link to={`/posts/${post.id}`} className="btn btn-outline">Read</Link>
                                    <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">Edit</Link>
                                    <button onClick={() => deleteDocument(post.id)} className="btn btn-outline btn-danger">Delete</button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default Dashboard;