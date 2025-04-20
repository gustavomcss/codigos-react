// Import React Libs
import { useContext } from 'react';

// Import Context
import { AppContext } from '../App';

const Context = () => {
    const details = useContext(AppContext);

    return (
        <>
            <div className="Context">
                {details && (
                    <div>
                        <h1>Language: {details.language}</h1>

                        <p>FW: {details.framework}</p>
                        <p>QTD: {details.projects}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Context;