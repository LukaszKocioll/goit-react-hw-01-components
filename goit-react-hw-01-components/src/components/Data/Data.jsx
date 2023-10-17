import css from './data.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css['stat-list']}>
        {stats.map(({ label, percentage, id }) => (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
