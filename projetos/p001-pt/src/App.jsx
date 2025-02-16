// Import Style
import './App.css';

// Import React
import { useCallback, useEffect, useState } from 'react';

// Import Component
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// Import Data
import { wordsList } from './data/Words';

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" }
]

const attemptsQnt = 3;

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [attempts, setAttempts] = useState(attemptsQnt);
    const [score, setScore] = useState(0);

    const pickWordAndCategory = () => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
        const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)];

        return {word, category};
    };

    // clear letters state
    const clearLettersStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    };

    const startGame = () => {
        clearLettersStates();

        const {word, category} = pickWordAndCategory();

        let wordLetters = word.split("");
        wordLetters = wordLetters.map((l) => l.toUpperCase());

        console.log(wordLetters);

        setPickedWord(word);
        setPickedCategory(category);
        setLetters(wordLetters);

        setGameStage(stages[1].name);
    };

    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toUpperCase();

        if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
            return;
        }

        if (letters.includes(normalizedLetter)) {
            setGuessedLetters((actualGuessedLetters) => [
                ...actualGuessedLetters, normalizedLetter
            ]);
        } else {
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters, normalizedLetter
            ]);

            setAttempts((actualAttempts) => actualAttempts - 1);
        }
    };

    useEffect(() => {
        if (attempts === 0) {
            clearLettersStates();

            setGameStage(stages[2].name);
        }
    }, [attempts]);

    useEffect(() => {
        const uniqueLetters = [...new Set(letters)];

        if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
            setScore((actualScore) => (actualScore += 100));

            startGame();

            setAttempts(attemptsQnt);
        }
    }, [letters, guessedLetters, gameStage, startGame]);

    const retryGame = () => {
        setScore(0);
        setAttempts(attemptsQnt);

        setGameStage(stages[0].name);
    };

    return (
        <>
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/></svg>
                Palavra Secreta
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/></svg>
            </h1>

            {gameStage === stages[0].name && <StartScreen startGame={startGame} />}
            {gameStage === stages[1].name && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} attempts={attempts} score={score} />}
            {gameStage === stages[2].name && <GameOver retryGame={retryGame} score={score} />}
        </>
    );
};

export default App;
