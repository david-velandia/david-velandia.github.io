import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 60px;
  margin: 30px auto 0;
  max-width: 1150px;
  position: sticky;
  top: 0;
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 21px;
  }
`;

export const Main = styled.main`
  margin: auto;
  max-width: 1150px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 20px 21px 20px 89px;
  }
`;
