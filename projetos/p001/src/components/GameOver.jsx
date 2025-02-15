// Import Component Style
import './GameOver.css';

const GameOver = ({retryGame, score}) => {
    return (
        <>
            <div className="gameOver">
                <p>You failed! Game Over</p>
                <p>Your Score was: <span>{score} points</span></p>
                
                <button type="button" className="btn btn-outline-light" onClick={retryGame}>Retry Game</button>
            </div>
        </>
    );
};

export default GameOver;