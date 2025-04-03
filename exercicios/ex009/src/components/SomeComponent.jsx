// Import React Libs
import { useImperativeHandle } from 'react';
import { useRef } from 'react';
import { forwardRef } from 'react';

const SomeComponent = forwardRef((props, ref) => {
    /* 15 - useImperativeHandle */
    const localInputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            validate: () => {
                if(localInputRef.current.value.length > 3) {
                    alert('The maximum number of characters is 3!');
                    localInputRef.current.value = '';
                }
            }
        }
    });

    return (
        <>
            <div className="SomeComponent">
                {/* 15 - useImperativeHandle */}
                <label>Enter a maximum of 3 characters: <br />
                    <input type="text" ref={localInputRef}/>
                </label> <br /><br />
            </div>
        </>
    );
});

export default SomeComponent;