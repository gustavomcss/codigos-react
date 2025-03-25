// Import Firebase Firestore
import { db, app } from '../firebase/config';

// Import Firebase Authentication
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';

// Import React
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth(app);

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    };

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.name
            })

            setLoading(false);

            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("password")) {
                systemErrorMessage = "Password must be at least 6 characters long";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email already in use";
            } else {
                systemErrorMessage = "An error occurred. Please try again later";
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    const logOut = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    const logIn = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);

            setLoading(false);
        } catch (error) {
            let systemErrorMessage;

            if (error.message.includes("invalid-credential")) {
                systemErrorMessage = "Incorrect Email and/or Password";
            } else {
                systemErrorMessage = "An error occurred. Please try again later";
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logOut,
        logIn
    };
};