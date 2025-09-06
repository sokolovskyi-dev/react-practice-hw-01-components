import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatItem,
  StatList,
  Title,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils/random-color';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
