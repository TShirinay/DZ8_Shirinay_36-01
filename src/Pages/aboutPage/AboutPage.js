import {useContext} from 'react';
import {ModalContext} from "../../context/ModalContext";
import ModalWindow from "../../components/ModalWindow";

function About () {
    const {modalOpen} = useContext(ModalContext);

    return (
        <div>
            {modalOpen && <ModalWindow content={<div>Любой контент здесь</div>} />}
        </div>
    );
};

export default About;
