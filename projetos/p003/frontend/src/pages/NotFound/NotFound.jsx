// Import Style Page Module
import styles from './NotFound.module.css';

// Import React Router DOM
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className={styles.NotFound}>
                <h2>Page Not Found!</h2>
                <p>Go to <Link to="/">Home</Link></p>
            </div>
        </>
    );
};

export default NotFound;