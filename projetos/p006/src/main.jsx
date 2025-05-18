// Import Styles
import './index.css';

// Import React Libs
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Components
import App from './App.jsx';

// Import Contexts
import { CartProvider } from './contexts/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </CartProvider>,
);
