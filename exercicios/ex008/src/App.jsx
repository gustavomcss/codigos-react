// Import Style
import './App.css';

// Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

// Import Components
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <div className="App">
                <h1>Context API</h1>

                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
