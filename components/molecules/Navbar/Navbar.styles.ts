import styled from 'styled-components';
import { Hamburger } from '@/atoms';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 16px 0 12px;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.query.desktop} {
    padding-left: 68px;
  }
`;

export const LogoLink = styled.a`
  width: 200px;
  cursor: pointer;
  z-index: 100;

  ${({ theme }) => theme.query.desktop} {
    width: 264px;
  }
`;

export const DesktopMenu = styled.ul`
  display: flex;
  height: 100%;
  overflow: hidden;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
  margin-bottom: 12px;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.mainBlack};
  cursor: pointer;
  text-decoration: none;
  padding: 0;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => theme.query.desktop} {
    font-size: 18px;
    padding: 0 21px;
  }
`;

export const MobileHamburger = styled(Hamburger)`
  z-index: 100;
  transform: scale(0.8);
`;

export const MobileContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  overflow-y: hidden;
  animation-timing-function: ease-in;
  animation-duration: 0.15s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      height: 0;
    }

    to {
      height: 100vh;
    }
  }
`;

export const MobileList = styled.ul`
  margin-top: 70px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 32px 0;
  text-align: center;
`;
