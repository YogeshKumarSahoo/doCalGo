import PropTypes from 'prop-types';

export const Question = ({number1, operation, number2}) => {
  return (
    <div className="question-container flex justify-center">
        <h2 className="font-bold text-8xl md:text-9xl mb-10">
            {number1} {operation} {number2}
        </h2>
    </div>
  )
}

Question.propTypes = {
    number1: PropTypes.number.isRequired,
    operation: PropTypes.string.isRequired,
    number2: PropTypes.number.isRequired
}