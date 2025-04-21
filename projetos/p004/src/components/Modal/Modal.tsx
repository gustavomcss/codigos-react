// Import Style Component 
import './Modal.css';

// Interface
interface IProps {
    children: React.ReactNode;
};

const Modal = ({ children }: IProps) => {
    // Function to Close Modal
    const closeModal = (): void => {
        const modal = document.querySelector(".Modal");

        modal!.classList.add("hide");
    };

    return (
        <>
            <div className="Modal hide">
                <div className="fade" onClick={closeModal}></div>
                <div className="modal">
                    <h2>Modal Text</h2>

                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;