// Import Component Style Module
import styles from './Navbar.module.css';

// Import React
import { NavLink } from 'react-router-dom';

// Import Context
import { useAuthValue } from '../context/AuthContext';

// Import Hooks
import { useAuthentication } from '../hooks/useAuthentication';

const Navbar = () => {
    const {user} = useAuthValue();
    const {logOut} = useAuthentication();

    return (
        <>
            <div className="Navbar">
                <nav className={styles.navbar}>
                    <NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>
                    <ul className={styles.linksList}>
                        <li>
                            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink>
                        </li>

                        {!user && (
                            <>
                                <li>
                                    <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Register</NavLink>
                                </li>
                            </>
                        )}

                        {user && (
                            <>
                                <li>
                                    <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>New Post</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink>
                                </li>
                            </>
                        )}

                        {user && (
                            <button className={styles.navButton} onClick={logOut}>Log Out</button>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;