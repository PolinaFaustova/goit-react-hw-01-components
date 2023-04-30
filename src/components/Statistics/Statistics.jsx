import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
      <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.statList}>
              {stats.map(({ id, label, percentage }) => {
                  return (
            <li className={css.item} key={id} style={{backgroundColor: randomColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{ percentage}%</span>
              </li>
                )
              })}
       </ul>
       </section>
         )
       }

       function randomColor() {
        const colors = ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9', '#B10DC9', '#FF69B4', '#800080', '#FF4500', '#006400'];
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
      }
      
      
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape),
}