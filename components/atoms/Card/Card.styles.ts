import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  border-radius: 8px;

  ${({ theme }) => theme.query.tablet} {
    padding: 24px;
  }
  ${({ theme }) => theme.query.desktop} {
    padding: 32px;
  }
`;
