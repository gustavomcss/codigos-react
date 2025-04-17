// Import Style Component Module
import styles from './Navbar.module.css';

// Import Logo 
import logo from '../assets/ReactGram Logo.svg';

// Import React Libs
import { useState } from 'react';

// Import React Router DOM
import { NavLink, Link, useNavigate } from 'react-router-dom';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import React Icons
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs';
import { FiLogOut } from "react-icons/fi";

// Import Hooks
import { useAuth } from '../hooks/useAuth';

// Import Redux Store Functions
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
    const { auth } = useAuth();
    const { user } = useSelector((state) => state.auth);

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());

        navigate("/login");
    };

    return (
        <>
            <div className={styles.Navbar}>
                <nav>
                    <Link to="/"><img src={logo} />ReactGram</Link>

                    <form className={styles.searchForm}>
                        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <BsSearch />
                    </form>

                    <ul className={styles.navLinks}>
                        {auth ? (
                            <>
                                <li>
                                    <NavLink to="/">
                                        <BsHouseDoorFill />
                                    </NavLink>
                                </li>

                                {user && (
                                    <li>
                                        <NavLink to={`/users/${user._id}`}>
                                            <BsFillCameraFill />
                                        </NavLink>
                                    </li>
                                )}

                                <li>
                                    <NavLink to="/profile">
                                        <BsFillPersonFill />
                                    </NavLink>
                                </li>
                                <li>
                                    <span onClick={handleLogout}>
                                        <FiLogOut />
                                    </span>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;