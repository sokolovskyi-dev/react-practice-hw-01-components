import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: -1px 0px 8px 9px rgba(34, 60, 80, 0.2);
  border: 2px solid grey;
  border-collapse: collapse;
  text-align: center;
`;
export const TableHead = styled.thead`
  background-color: #384ef3ff;
  color: white;
  border-radius: 10px;
`;
export const Row = styled.tr`
  & th,
  td {
    padding: 10px 60px;
    border: 1px solid #ccc;
  }
`;
export const TableBody = styled.tbody`
  & tr:nth-child(odd) {
    background-color: #b1b1b1ff;
  }
`;
