
import { useGlobalContext } from "../utils/context";

const Modal = () => {
    const { modalOpen, closeModal, correct, questions } = useGlobalContext();
    return (
        <div className={`${modalOpen ? "modal-container isOpen" : "modal-container"}`}>
            <div className="modal-content">
                <h2>¡Congratulations!</h2>
                <p>You Answered {((correct / questions.length) * 100).toFixed(0)}% of The Questions Correctly</p>
                <button className="close-button" onClick={closeModal}>Play Again</button>
            </div>
        </div>
    );
};

export default Modal;
