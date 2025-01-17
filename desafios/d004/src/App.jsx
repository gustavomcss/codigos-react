// Import Style
import './App.css'

// Import Components
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    { id: 1, name: 'João', age: 31, occupation: 'Developer' },
    { id: 2, name: 'Maria', age: 15, occupation: 'Senior Developer' },
    { id: 3, name: 'José', age: 30, occupation: 'Designer' }
  ];

  return (
    <>
      <h1>React - Challenge 04</h1>

      { users.map((user) => (
        <UserDetails 
          key={ user.id }
          index={ user.id }
          name={ user.name }
          age={ user.age }
          occupation={ user.occupation } 
        />
      )) }
    </>
  )
}

export default App
