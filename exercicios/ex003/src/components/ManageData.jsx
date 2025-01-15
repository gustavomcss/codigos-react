// Import UseState
import { useState } from 'react';

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

    console.log(number);

    return (
        <div>
            <div>
                <p>Value: {someData}.</p>
                <button onClick={ () => (someData = 15) }>Change Variable.</button>
            </div>
            <div>
                <p>Value: {number}.</p>
                <button onClick={ () => setNumber(25) }>Change State.</button>
            </div>
        </div>
    );
};

export default ManageData;
