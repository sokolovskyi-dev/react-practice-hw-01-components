import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: fit-content;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid grey;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -1px 0px 8px 9px rgba(34, 60, 80, 0.2);
  background-color: #faf6f6ff;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  font-style: 28px;
  text-align: center;
  color: #686565ff;
  margin-top: 30px;
`;
export const StatList = styled.ul`
  display: flex;
  margin-top: 30px;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid grey;
  gap: 10px;

  & span:nth-child(2) {
    font-weight: 800;
    font-size: 20px;
  }
`;
