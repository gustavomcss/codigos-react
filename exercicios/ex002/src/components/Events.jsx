const Events = () => {
    const HandleMyEvent = (e) => {
        console.log(e);
        console.log('Activated the Event!');
    };

    const RenderSomething = (x) => {
        if (x) {
            return <h1>Rendering this!</h1>
        } else {
            return <h1>Rendering this too!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={ HandleMyEvent }>Click Here!</button>
            </div>
            <div>
                <button onClick={ () => console.log("Clicked!") }>Click Here Too!</button>
                <button onClick={ () => {if (true) {console.log("This shouldn't exist.")}} }>Click Here, Please!</button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>
    )
}

export default Events;
