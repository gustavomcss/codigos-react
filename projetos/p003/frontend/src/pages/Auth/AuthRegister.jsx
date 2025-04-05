// Import Style Module Page
import styles from './Auth.module.css';

// Import React Router DOM
import { Link } from 'react-router-dom';

// Import React Hooks
import { useState, useEffect } from 'react';

// Import React Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Redux Store Functions
import { register, reset } from "../../slices/authSlice";

// Import Components
import Message from '../../components/Message';

const AuthRegister = () => {
    // State for Form Inputs
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [confirmPassword, setConfirmPassword] = useState(undefined);

    // Allows to use the Redux Store Functions
    const dispatch = useDispatch();

    // Get Control Flags from Redux Store
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        // Prevent Reloading Page on Submit
        e.preventDefault();

        // Creation of User Object
        const user = {
            name,
            email,
            password,
            confirmPassword
        };

        dispatch(register(user));
    };

    // Clear All Auth States
    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <>
            <div className={styles.AuthRegister}>
                <h2>Register</h2>
                <p className={styles.subtitle}>Register to enter the world of photography</p>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    {!loading &&
                        <input className="btn" type="submit" value="Register" />
                    }
                    {loading &&
                        <input className="btn" type="submit" value="Wait..." disabled />
                    }

                    {error &&
                        <Message msg={error} type="error" />
                    }
                </form>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </>
    );
};

export default AuthRegister;