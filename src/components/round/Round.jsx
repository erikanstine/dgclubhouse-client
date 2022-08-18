import './round.css';
export default function Round({ round }) {
    return (
    <div className="roundWrapper">
        <span className="roundTitle">
            {`${round.date} - ${round.courseName}`}
        </span>
        <span className="roundScore">
            {`Score: ${round.score}`}
        </span>
    </div>
    )
}