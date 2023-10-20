import React from 'react';
import {
  StyledTable,
  StyledSection,
  StyledThead,
  StyledTh,
  // StyledTr,
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
          {items.map(({ id, type, amount, currency, bgColor }) => (
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
