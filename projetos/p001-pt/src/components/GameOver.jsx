// Import Component Style
import './GameOver.css';

const GameOver = ({retryGame, score}) => {
    return (
        <>
            <div className="gameOver">
                <p>Você falhou! Jogo encerrado</p>
                <p>Sua pontuação foi: <span>{score} pontos</span></p>
                
                <button type="button" className="btn btn-outline-light" onClick={retryGame}>Tentar Novamente</button>
            </div>
        </>
    );
};

export default GameOver;