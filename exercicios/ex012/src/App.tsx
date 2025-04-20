// Import Style App
import './App.css';

// Import React Libs
import { createContext } from 'react';

// Import Components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

type textOrNull = string | null;

interface IAppContext {
    language: string,
    framework: string,
    projects: number
};

export const AppContext = createContext<IAppContext | null>(null);

function App() {
    const name: string = "Gustavo";
    const age: number = 21;
    const isWorking: boolean = true;

    const userGreeting = (name: string): string => {
        return `Hello, ${name}!`;
    };

    const myText: textOrNull = "This is a text";
    let mySecondText: textOrNull = null;

    mySecondText = "Now it has a value!";

    const contextValue: IAppContext = {
        language: "JavaScript",
        framework: "Express",
        projects: 10
    };

    return (
        <>
            <AppContext.Provider value={contextValue}>
                <div className="App">
                    <h1>Introducing in TS</h1>

                    <p>Name: {name}</p>
                    <p>Age: {age}</p>

                    {isWorking && (
                        <p>It's working!</p>
                    )}

                    <p>{userGreeting(name)}</p>

                    <FirstComponent />

                    <SecondComponent name={name} />

                    <Destructuring title="First Post" content="First Some Content" commentsQty={10} tags={["TypeScript", "JavaScript"]} category={Category.TS} />
                    <Destructuring title="Second Post" content="Second Some Content" commentsQty={20} tags={["Python", "HTML"]} category={Category.P} />

                    <State />

                    {myText && (
                        <p>There's a text in variable: {myText}</p>
                    )}
                    {mySecondText && (
                        <p>There's a text in variable: {mySecondText}</p>
                    )}

                    <Context />
                </div>
            </AppContext.Provider>
        </>
    );
};

export default App;
