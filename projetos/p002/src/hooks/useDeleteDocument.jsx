// Import Firebase Firestore
import { db, app } from '../firebase/config';

// Import Firebase Functions
import { doc, deleteDoc } from 'firebase/firestore';

// Import React
import { useState, useEffect, useReducer } from 'react';

const initialState = {
    loading: null,
    error: null
};

const deleteReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {loading: true, error: null};
        case "DELETED_DOC":
            return {loading: false, error: null};
        case "ERROR":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState);

    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            return
        } else {
            dispatch(action);
        }
    };

    const deleteDocument = async (id) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
            payload: deleteDocument
        });

        try {
            const deletedDocument = await deleteDoc(doc(db, docCollection, id));

            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument
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
        deleteDocument, 
        response
    };
};