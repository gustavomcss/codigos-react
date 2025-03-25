// Import Firebase Firestore
import { db, app } from '../firebase/config';

// Import Firebase Functions
import { doc, getDoc } from 'firebase/firestore';

// Import React
import { useState, useEffect } from 'react';

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadDocument() {
            if (cancelled) {
                return;
            }

            setLoading(true);

            try {
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();

                    if (data.createdAt && data.createdAt.toDate) {
                        data.createdAt = data.createdAt.toDate().toLocaleString('pt-BR', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                    }

                    setDocument(data);
                }

                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);

                setLoading(false);
            }
        }

        loadDocument();
    }, [docCollection, id, cancelled]);

    useEffect(() => {
        return () => {
            setCancelled(true);
        };
    }, []);

    return {
        document,
        loading,
        error
    };
};