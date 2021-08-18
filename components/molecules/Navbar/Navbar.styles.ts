import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.query.desktop} {
    padding-left: 68px;
  }
`;

export const LogoLink = styled.a`
  width: 264px;
  cursor: pointer;
`;

export const DesktopMenu = styled.ul`
  display: flex;
  height: 100%;
  overflow: hidden;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.mainBlack};
  cursor: pointer;
  text-decoration: none;
  padding: 0 21px;

  &:hover {
    text-decoration: underline;
  }
`;
