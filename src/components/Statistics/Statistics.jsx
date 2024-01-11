import css from './Statistics.module.css';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <p className={css.p}>Good: {good}</p>
      <p className={css.p}>Neutral: {neutral}</p>
      <p className={css.p}>Bad: {bad}</p>
      <p className={css.p}>Total: {countTotalFeedback}</p>
      <p className={css.p}>Positive feedback: {Math.round(countPositiveFeedbackPercentage)}%</p>
    </div>
  );
};

export { Statistics };
