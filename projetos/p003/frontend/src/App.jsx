// Import Style App
import './App.css';

// Import React Router DOM
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Hooks
import { useAuth } from './hooks/useAuth';

// Import Pages
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import AuthLogin from './pages/Auth/AuthLogin';
import AuthRegister from './pages/Auth/AuthRegister';

// Import Components
import Loading from './pages/Loading/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const { auth, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="App">                
                <BrowserRouter>
                    <Navbar />

                    <div className="container">
                        <Routes>
                            <Route path="*" element={<NotFound />} />

                            <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
                            <Route path="/login" element={!auth ? <AuthLogin /> : <Navigate to="/" />} />
                            <Route path="/register" element={!auth ? <AuthRegister /> : <Navigate to="/" />} />
                        </Routes>
                    </div>

                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
