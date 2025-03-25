// Import Firebase Firestore
import { db, app } from '../firebase/config';

// Import Firebase Functions
import { doc, updateDoc } from 'firebase/firestore';

// Import React
import { useState, useEffect, useReducer } from 'react';

const initialState = {
    loading: null,
    error: null
};

const updateReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {loading: true, error: null};
        case "UPDATED_DOC":
            return {loading: false, error: null};
        case "ERROR":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const useUpdateDocument = (docCollection) => {
    const [response, dispatch] = useReducer(updateReducer, initialState);

    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            return
        } else {
            dispatch(action);
        }
    };

    const updateDocument = async (id, data) => {
        checkCancelBeforeDispatch({
            type: "LOADING"
        });

        try {
            const docRef = await doc(db, docCollection, id);
            const updatedDocument = await updateDoc(docRef, data);

            checkCancelBeforeDispatch({
                type: "UPDATED_DOC",
                payload: updatedDocument
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message
            });
        }
    };

    return {
        updateDocument, 
        response
    };
};