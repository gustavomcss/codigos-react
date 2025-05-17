// Import Styles
import './App.css';

// Import Components
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
    return (
        <>
            <div className="App">
                <Header />

                <Menu />

                <Footer />

                <Modal />
            </div>
        </>
    );
};

export default App;
