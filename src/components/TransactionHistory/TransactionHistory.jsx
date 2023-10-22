import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledSection,
  StyledThead,
  StyledTh,
  StyledTd,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <StyledSection>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Type</StyledTh>
            <StyledTh>Amount</StyledTh>
            <StyledTh>Currency</StyledTh>
          </tr>
        </StyledThead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <StyledTd>{type}</StyledTd>
              <StyledTd>{amount}</StyledTd>
              <StyledTd>{currency}</StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledSection>
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
  ).isRequired,
};
