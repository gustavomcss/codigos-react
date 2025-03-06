import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import Context
import { CounterContextProvider } from './context/CounterContext';
import { TitleColorContextProvider } from './context/TitleColorContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterContextProvider>
            <TitleColorContextProvider>
                <App />
            </TitleColorContextProvider>
        </CounterContextProvider>
    </StrictMode>,
)
