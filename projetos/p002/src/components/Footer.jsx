// Import Component Style Module
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <footer className={styles.footer}>
                    <h3>Write about what are you interested in!</h3>
                    <p>Mini Blog &copy; 2025</p>
                </footer>
            </div>
        </>
    );
};

export default Footer;