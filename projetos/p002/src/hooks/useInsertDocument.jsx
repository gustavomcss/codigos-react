// Import Firebase Firestore
import { db, app } from '../firebase/config';

// Import Firebase Functions
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// Import React
import { useState, useEffect, useReducer } from 'react';

const initialState = {
    loading: null,
    error: null
};

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {loading: true, error: null};
        case "INSERTED_DOC":
            return {loading: false, error: null};
        case "ERROR":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            return
        } else {
            dispatch(action);
        }
    };

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
            payload: insertDocument
        });

        try {
            const newDocument = {...document, createdAt: Timestamp.now()};

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            );

            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertedDocument
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message
            });
        }
    };

    useEffect(() => {
        return () => 
            setCancelled(true);
    }, []);

    return {
        insertDocument, 
        response
    };
};