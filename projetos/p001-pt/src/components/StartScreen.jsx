// Import Component Style
import './StartScreen.css';

const StartScreen = ({startGame}) => {
    return (
        <>
            <div className="startScreen">
                <p>Clique no botão abaixo para jogar</p>

                <button type="button" className="btn btn-outline-light" onClick={startGame}>Começar Jogo</button>
            </div>
        </>
    );
};

export default StartScreen;