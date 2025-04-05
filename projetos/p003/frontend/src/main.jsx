import './index.css';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './App.jsx';

// Import React Redux
import { Provider } from 'react-redux';

// Import Redux Store
import { store } from './store.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
