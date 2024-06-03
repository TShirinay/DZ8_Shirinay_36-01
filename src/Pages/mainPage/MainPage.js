import {useContext} from 'react';
import {ModalContext} from "../../context/ModalContext";

function MainPage () {
    const {openModal, closeModal} = useContext(ModalContext);

    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно</button>
            <button onClick={closeModal}>Закрыть модальное окно</button>
        </div>
    );
};

export default MainPage;
