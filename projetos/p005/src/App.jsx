// Import Style App
import './App.css';

// Import React Router DOM
import { Outlet } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';

function App() {

    return (
        <>
            <div className="App">
                <Navbar />

                <Outlet />
            </div>
        </>
    );
};

export default App;
