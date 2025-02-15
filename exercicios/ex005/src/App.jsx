// Import Style
import './App.css'

// Import Component
import MyForm from './components/MyForm';

function App() {
    return (
        <>
            <h2>React with Forms</h2>

            <MyForm user={{name: "Gustavo Martins", email: "ecfgustavo@gmail.com", bio: "I'm a Computer Engineer", role: "admin"}}/>
        </>
    )
}

export default App;
