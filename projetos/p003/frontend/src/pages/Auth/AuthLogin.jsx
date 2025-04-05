// Import Style Module Page
import styles from './Auth.module.css';

// Import React Router DOM
import { Link } from 'react-router-dom';

// Import React Hooks
import { useState, useEffect } from 'react';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { login, reset } from "../../slices/authSlice";

// Import Components
import Message from '../../components/Message';

const AuthLogin = () => {
    // State for Form Inputs
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    // Allows to use the Redux Store Functions
    const dispatch = useDispatch();

    // Get Control Flags from Redux Store
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        // Creation of User Object
        const user = {
            email,
            password
        };

        dispatch(login(user));
    };

    // Clear All Auth States
    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <>
            <div className={styles.AuthLogin}>
                <h2>Login</h2>
                <p className={styles.subtitle}>Login to enter the world of photography</p>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {!loading &&
                        <input className="btn" type="submit" value="Login" />
                    }
                    {loading &&
                        <input className="btn" type="submit" value="Wait..." disabled />
                    }

                    {error &&
                        <Message msg={error} type="error" />
                    }
                </form>

                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </>
    );
};

export default AuthLogin;