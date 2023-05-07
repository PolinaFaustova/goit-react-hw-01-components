import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
import {StatisticsSection, Title, StatList, Item, Label, Percentage} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
      <StatisticsSection>
      {title && <Title>{title}</Title>}
          <StatList>
              {stats.map(({ id, label, percentage }) => {
                  return (
            <Item key={id} style={{backgroundColor: randomColor()}}>
            <Label>{label}</Label>
            <Percentage>{ percentage}%</Percentage>
              </Item>
                )
              })}
       </StatList>
       </StatisticsSection>
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