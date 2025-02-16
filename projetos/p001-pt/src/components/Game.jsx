// Import Component Style
import './Game.css';

// Import React
import { useRef, useState } from 'react';

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, attempts, score}) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus();
    };
    
    return (
        <>
            <div className="game">
                <p className="points">
                    Pontuação: <span>{score}</span>
                </p>

                <p className="attempts">
                    Você ainda tem mais <span>{attempts}</span> tentativa(s)
                </p>

                <p className="tip">
                    Dica da Palavra: <span>{pickedCategory}</span>
                </p>

                <div className="wordContainer">
                    {letters.map((letter, index) => (
                        guessedLetters.includes(letter) ? (
                            <span key={index} className="letter">{letter}</span>
                        ) : (
                            <span key={index} className="blankSquare"></span>
                        )
                    ))}
                </div>

                <div className="letterContainer">
                    <p>Tente Adivinhar uma Letra da Palavra:</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
                        <button type="submit" className="btn btn-primary">Advinhar!</button>
                    </form>
                </div>

                <div className="wrongLetters">
                    <p>Letra(s) já Utilizadas:</p>
                    {wrongLetters.map((letter, index) => (
                        <span key={index}>{letter}, </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Game;