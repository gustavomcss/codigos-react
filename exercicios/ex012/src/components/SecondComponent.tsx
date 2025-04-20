interface Props {
    name: String
};

const SecondComponent = (props: Props) => {
    return (
        <>
            <div className="SecondComponent">
                <h1>My Second Component in TS!</h1>
                
                <p>His name is {props.name}</p>
            </div>
        </>
    );
};

export default SecondComponent;