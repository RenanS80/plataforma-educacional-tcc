import { MouseEventHandler } from 'react';

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
                    <p>{!description.endsWith('.') ? description.concat('.') : description}</p>
                    <a 
                        href={link.startsWith('www') || !link.startsWith('http') || !link.startsWith('https') ?
                            'https://'.concat(link) : link} 
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