import React from 'react';
import PropTypes from 'prop-types';
import { Row, Table, TableBody, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <Row>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Row>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
