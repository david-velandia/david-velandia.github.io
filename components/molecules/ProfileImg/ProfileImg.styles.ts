import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  color: ${({ theme }) => theme.colors.mainBlack};
`;
