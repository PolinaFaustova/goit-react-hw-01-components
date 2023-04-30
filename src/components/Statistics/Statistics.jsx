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
        let red, green, blue;
        do {
          red = Math.floor(Math.random() * 256);
          green = Math.floor(Math.random() * 256);
          blue = Math.floor(Math.random() * 256);
        } while (red === 255 && green === 255 && blue === 255 || red < 50 && green < 50);
        return `rgb(${red}, ${green}, ${blue})`;
      }
      

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape),
}