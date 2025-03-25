// Import Page Style Module
import styles from './Home.module.css';

// Import React
import { useState } from 'react';

// Import Hooks
import { useNavigate, Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// Import Components
import PostDetail from '../../components/PostDetail';

const Home = () => {
    const [query, setQuery] = useState("");
    const {documents: posts, loading} = useFetchDocuments("posts");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            return navigate(`/search?q=${query}`);
        }
    };

    return (
        <>
            <div className={styles.Home}>
                <h1>Latest Posts</h1>

                <form onSubmit={handleSubmit} className={styles.searchForm}>
                    <input type="text" placeholder="Search for tags" onChange={(e) => setQuery(e.target.value)} />
                    <button className="btn btn-dark">Search</button>
                </form>

                <div>
                    {loading && <p>Loading...</p>}

                    {posts && posts.map((post) => (
                        <PostDetail key={post.id} post={post} />
                    ))}

                    {posts && posts.length === 0 && (
                        <div className={styles.noPosts}>
                            <p>No posts found</p>
                            <Link to="/posts/create" className="btn">Create First Post</Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;