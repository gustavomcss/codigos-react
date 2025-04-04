// Import Style App
import './App.css';

// Import React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
