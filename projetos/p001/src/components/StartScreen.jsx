// Import Component Style
import './StartScreen.css';

const StartScreen = ({startGame}) => {
    return (
        <>
            <div className="startScreen">
                <p>Click on the button below to start playing</p>

                <button type="button" className="btn btn-outline-light" onClick={startGame}>Start Game</button>
            </div>
        </>
    );
};

export default StartScreen;