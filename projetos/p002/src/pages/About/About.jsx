// Import Page Style Module
import styles from './About.module.css';

// Import React
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className={styles.About}>
                <h1>About Mini <span>Blog</span></h1>
                <p>This project consists of a blog made in <strong>React</strong> on the front-end and <strong>FireBase</strong> on the back-end.</p>

                <Link to="/posts/create" className="btn">Create Post</Link>
            </div>
        </>
    );
};

export default About;