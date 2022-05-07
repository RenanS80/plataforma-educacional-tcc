import Stars from 'components/Stars';
import './styles.css';

type Props = {
    score: number;
    count: number;
    origin: string;
}

function Score({ score, count, origin }: Props) {

    return (

        <div className={origin === 'catalog' ? 'catalog-score-info' : 'details-score-info'}>
            <p className="score">{score > 0 ? score.toFixed(1) : '-'}</p>  
            <div className={origin === 'catalog' ? 'asasa' : 'asa'} >
                <Stars score={score} />
            </div>
            <p className="count-score">{count === 1 ? `${count} avaliação` : `${count} avaliações`}</p>
        </div>

    );
}

export default Score;