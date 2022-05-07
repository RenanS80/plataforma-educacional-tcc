import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';

import './styles.css';

type Props = {
    score: number;
}

type StarProps = {
    fill: number;
}

/* Realiza a lógica de exibição das estrelas com base na nota recebida
EX: getFills(3.5) => [1, 1, 1, 0.5, 0]     getFills(4.1) => [1, 1, 1, 1, 0.5] */
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

// Função auxiliar para verificar qual estrela deve ser renderizada, com base no fill passado
function Star({ fill } : StarProps) {
    if(fill === 0) {
        return <StarEmpty />
    }
    else if(fill === 1) {
        return <StarFull />
    }
    else {
        return <StarHalf />
    }
}

// Componente principal para passagem de estrelas à função auxiliar
function Stars({ score } : Props) {

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    );
}

export default Stars;