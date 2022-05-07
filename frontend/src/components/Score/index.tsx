import Stars from 'components/Stars';
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function Score({ score, count }: Props) {

    return (

        <div className="score-info">
            <p className="score">{score > 0 ? score.toFixed(1) : '-'}</p>
            <div className="group-stars">
                <Stars score={score} />
            </div>
            <p className="count-score">{count === 1 ? `(${count} avaliação)` : `(${count} avaliações)`}</p>
        </div>

    );
}

export default Score;