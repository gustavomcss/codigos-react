// Import React Libs
import { useState } from 'react';
import { useEffect } from 'react';

const List = ({ getItems }) => {
    /* 12 - useCallback */
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        console.log("Searching for items in DB...");

        setMyItems(getItems);
    }, [getItems]);

    return (
        <>
            <div className="List">
                {/* 12 - useCallback */}
                {myItems && myItems.map((item) => (
                    <p key={item}>
                        {item}
                    </p>
                ))}
            </div>
        </>
    );
};

export default List;