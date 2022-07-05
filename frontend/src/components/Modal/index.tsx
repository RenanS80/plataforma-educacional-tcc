import { MouseEventHandler } from 'react';
import { descriptionConfigure, urlConfigure } from 'utils/format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

type Props = {
    description: string,
    link: string,
    onClose: MouseEventHandler
}

function Modal({ description, link, onClose }: Props) {
    return (
        <>
            <div className="overlay-background"></div>
            <div className="resource-modal">
                <div className="resource-modal-title">
                    <h4>Descrição</h4>
                    <button>
                        <FontAwesomeIcon icon={faClose} className="close-resource-modal" onClick={onClose} />
                    </button>
                </div>

                <div className="resource-modal-content">
                    <p>{descriptionConfigure(description)}</p>
                    <a 
                        href={urlConfigure(link)}
                        target="_blank" 
                        rel="noreferrer" 
                        className="base-btn btn-visit-resource"
                    >
                        Visitar
                    </a>
                </div>
            </div>
        </>

    );
}

export default Modal;