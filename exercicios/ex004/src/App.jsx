// Import Style
import './App.css';

// Import UseState
import { useState } from "react";

// Import Component
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
    const n = 15;
    const [name] = useState("Gustavo");

    const redTitle = true;

    return (
        <>
            <h1>React With CSS</h1>

            <MyComponent />

            <p>This paragraph is from App.js.</p>

            <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>This element has been stylized inline.</p>
            <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>This element has been stylized inline.</p>

            <h2 style={ n < 10 ? ({ color: "purple" }) : ({ color: "pink" }) }>Dinamic CSS</h2>
            <h2 style={ n > 10 ? ({ color: "purple" }) : ({ color: "pink" }) }>Dinamic CSS</h2>
            <h2 style={ name === "Gustavo" ? ({ color: "green", backgroundColor: "#000000" }) : null }>Name Test CSS</h2>

            <h2 className={ redTitle ? ("redTitle") : ("title") }>This Title will have Dinamic Class</h2>

            <Title />
            <h1 className="myTitle">Testing</h1>
        </>
    );
}

export default App;
