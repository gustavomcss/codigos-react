// Import React Libs
import { useState, ChangeEvent } from 'react';

const State = () => {
    const [text, setText] = useState<string | null>(null);

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <div className="State">
                <h1>The text is: {text}</h1>

                <input type="text" onChange={handleText} />
            </div>
        </>
    );
};

export default State;