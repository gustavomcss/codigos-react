// Import Page Style Module
import styles from './Login.module.css';

// Import React
import { useState, useEffect } from 'react';

// Import Hooks
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const {logIn, error: authError, loading} = useAuthentication();

    const clearForm = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password
        };

        const response = await logIn(user);

        clearForm();
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <>
            <div className={styles.Login}>
                <h1>Login</h1>
                <p>Log in to use the Mini Blog</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input type="password" name="password" placeholder="User Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>

                    {!loading && <button className="btn">Login</button>}
                    {loading && <button className="btn" disabled>Wait...</button>}

                    {error &&
                        <p className="error">{error}</p>
                    }
                </form>
            </div>
        </>
    );
};

export default Login;