// Import Page Style Module
import styles from './Register.module.css';

// Import React
import { useState, useEffect } from 'react';

// Import Hooks
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const {createUser, error: authError, loading} = useAuthentication();

    const clearForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            name,
            email,
            password,
            confirmPassword
        };

        if (password !== confirmPassword) {
            setError("Passwords do Not Match");
            return;
        }

        const response = await createUser(user);

        clearForm();
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <>
            <div className={styles.Register}>
                <h1>Register</h1>
                <p>Create your user and share your stories</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Name:</span>
                        <input type="text" name="name" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input type="password" name="password" placeholder="User Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <label>
                        <span>Confirm Password:</span>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </label>

                    {!loading && <button className="btn">Register</button>}
                    {loading && <button className="btn" disabled>Wait...</button>}

                    {error &&
                        <p className="error">{error}</p>
                    }
                </form>
            </div>
        </>
    );
};

export default Register;