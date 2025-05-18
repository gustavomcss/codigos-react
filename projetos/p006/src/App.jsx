// Import Styles
import './App.css';

// Import React Libs
import { useState, useEffect } from 'react';

// Import Components
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [modalVisibility, setModalVisibility] = useState(false);

    const checkRestaurantOpen = () => {
        const data = new Date();
        const hora = data.getHours();

        if (hora >= 18 && hora < 22) {
            setIsOpen(true);
        };
    };

    useEffect(() => {
        checkRestaurantOpen;
    }, []);

    return (
        <>
            <div className="App">
                <Header isOpen={isOpen} />

                <Menu />

                <Footer onCartOpen={() => setModalVisibility(true)} />

                <Modal onCartClose={() => setModalVisibility(false)} visibility={modalVisibility} isOpen={isOpen} />
            </div>
        </>
    );
};

export default App;
