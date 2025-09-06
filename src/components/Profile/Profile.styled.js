import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 400px;
  /* padding: 20px; */
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid grey;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -1px 0px 8px 9px rgba(34, 60, 80, 0.2);
  background-color: #faf6f6ff;
`;

export const Description = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
  margin-top: 20px;
  background-color: #e0e6feff;
`;
export const StatsItem = styled.li`
  padding: 15px 0 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 1px solid grey;

  & span:nth-child(2) {
    font-weight: 800;
    font-size: 18px;
  }
`;
