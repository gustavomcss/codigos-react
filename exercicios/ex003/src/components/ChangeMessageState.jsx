const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Message 01", "Message 02", "Message 03"];

    return (
        <>
            <button onClick={ () => handleMessage(messages[0])}>Message 01</button>
            <button onClick={ () => handleMessage(messages[1])}>Message 02</button>
            <button onClick={ () => handleMessage(messages[2])}>Message 03</button>
        </>
    )
};

export default ChangeMessageState;