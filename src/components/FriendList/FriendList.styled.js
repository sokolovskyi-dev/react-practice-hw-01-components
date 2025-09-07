import styled from 'styled-components';

export const FriendListWrapper = styled.ul`
  width: fit-content;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;

  /* overflow: hidden; */

  background-color: #faf6f6ff;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Friend = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  box-shadow: -1px 0px 8px 9px rgba(34, 60, 80, 0.2);
  border: 2px solid grey;
  border-radius: 10px;
  padding: 25px;
  padding-right: 200px;
  /* width: fit-content; */
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
export const Name = styled.p`
  font-size: 26px;
  font-weight: 900;
  color: #4e4d4dff;
`;
