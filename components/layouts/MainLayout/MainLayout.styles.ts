import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 80px;
  margin: 0 auto;
  max-width: 1150px;
  position: sticky;
  top: 0;
  width: 100%;

  ${({ theme }) => theme.query.desktop} {
    margin: 30px auto 0;
    height: 60px;
    padding: 0 21px;
  }
`;

export const Main = styled.main`
  margin: auto;
  max-width: 1150px;
  padding: 0 16px 0 36px;

  ${({ theme }) => theme.query.desktop} {
    padding: 20px 21px 20px 89px;
  }
`;
