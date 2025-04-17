// Import Style Component Module
import styles from './Message.module.css';

const Message = ({msg, type}) => {
    return (
        <>
            <div className={styles.Message}>
                <div className={styles.message + " " + (type === "error" ? styles.error : styles.sucess)}>
                    <p>{msg}</p>
                </div>
            </div>
        </>
    );
};

export default Message;