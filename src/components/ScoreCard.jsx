import PropTypes from 'prop-types';

export const ScoreCard = ({correct, incorrect}) => {
    return (
        <div className="flex justify-between p-10 text-2xl">
            <p className="text-green-500">{correct}</p>
            <p className="text-red-600">{incorrect}</p>
        </div>
    )
}

ScoreCard.propTypes = {
    correct: PropTypes.number.isRequired,
    incorrect: PropTypes.number.isRequired
};
