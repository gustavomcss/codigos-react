const Container = ({children, myValue}) => {
    return (
        <>
            <h2>This is the Container Title.</h2>
            {children}
            <p>The value is: { myValue }.</p>
        </>
    );
}

export default Container;