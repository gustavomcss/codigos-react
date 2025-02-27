// Import Style
import './App.css';

// Import React
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Search from './pages/Search';

// Import Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <>
            <div className="App">
                <h1>React Router</h1>
                <BrowserRouter>
                    <Navbar />
                    <SearchForm />

                    <Routes>
                        <Route path="*" element={<NotFound />} />

                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/products/:id" element={<Product />} />
                        <Route path="/products/:id/info" element={<Info />} />

                        <Route path="/company" element={<Navigate to="/about" />} />

                        <Route path="/search" element={<Search />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
