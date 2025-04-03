// Import App Style
import './App.css';

// Import React Libs
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import Context
import { HookUseContext } from './components/HookUseContext';

// Import Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
    return (
        <>
            <div className="App">
                <HookUseContext>
                    <h1>React Hooks</h1>
                    <BrowserRouter>
                        <ul style={{ margin: "0px", padding: "0px" }}>
                            <li style={{ display: "flex", justifyContent: "center" , gap: "8px", listStyle: "none" }}>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        <Routes>
                            <Route path="/" element={<Home /> }/>
                            <Route path="/about" element={<About /> }/>
                        </Routes>
                    </BrowserRouter>
                </HookUseContext>
            </div>
        </>
    );
};

export default App;
