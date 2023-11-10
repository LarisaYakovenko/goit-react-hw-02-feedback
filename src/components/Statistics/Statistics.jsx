import PropTypes  from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.statist}>Good: <span>{good}</span></li>
      <li className={css.statist}>Neutral: <span>{neutral}</span></li>
      <li className={css.statist}>Bad: <span>{bad}</span></li>
      <li className={css.statist}>Total: <span>{total}</span></li>
      <li className={css.statist}>Positive feedback: <span>{positivePercentage}%</span></li>
    </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
