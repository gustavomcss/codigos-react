// Import UseState
import { useState } from 'react';

const ConditionalRender = () => {
    const [x, SetState] = useState(true);

    const [name, SetName] = useState("João");

    return (
        <div>
            <h1>Will this be displayed?</h1>
            { x && <p>If x is true, it will!</p> }
            { !x && <p>If x is false, it will not!</p> }

            <button onClick={ () => SetState(false) }>Click Here!</button>

            {name === "João" ? (
                <div>
                    <p>The name is João.</p>
                </div>
            ) : (
                <div>
                    <p>Name not found!</p>
                </div>
            )}

            <button onClick={ () => SetName("Ricardo") } >Click Here!</button>
        </div>
    );
};

export default ConditionalRender;
