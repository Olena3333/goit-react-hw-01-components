import styled from 'styled-components';
export const StyledTable = styled.table`
  background-color: white;
  border: 1px solid black;
  border-collapse: collapse;
`;
export const StyledSection = styled.section`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const StyledThead = styled.thead`
  background-color: lightblue;
  & tr:nth-child(even) {
    background-color: gray;
  }
`;
export const StyledTh = styled.th`
  border: 1px solid black;
  padding: 15px;
  padding: 15px;
`;
// export const StyledTr = styled.tr`
//   background-color: ${props => (props.$bgColor ? 'white' : 'gray')};
// `;

// tr:nth-child(even) {
//   background-color: gray;
// }

export const StyledTd = styled.td`
  border: 1px solid black;
  padding: 15px;
  padding: 15px;
`;
