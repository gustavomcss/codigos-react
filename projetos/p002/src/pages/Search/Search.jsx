// Import Page Style Module
import styles from './Search.module.css';

// Import React
import { Link } from 'react-router-dom';

// Import Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

// Import Components
import PostDetail from '../../components/PostDetail';

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents: posts} = useFetchDocuments("posts", search);

    return (
        <>
            <div className={styles.Search}>
                <h1>Search</h1>

                {posts && 
                    <p className={styles.result}>Results for: <span><b>#</b>{search}</span></p>
                }

                <div>
                    {posts && posts.length === 0 && (
                        <>
                            <p><strong>No posts</strong> from your tag search were found</p>
                            <div className={styles.linkContainer}>
                                <Link to="/" className="btn btn-dark">Go Back</Link>
                            </div>
                        </>
                    )}

                    {posts && posts.map((post) => (
                        <>
                            <PostDetail key={post.id} post={post} />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;