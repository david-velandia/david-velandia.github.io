import React, { FC } from 'react';
import { Logo } from '../../atoms/Icons';
import { DesktopMenu, LogoLink, Nav, NavItem, NavLink } from './Navbar.styles';
import NextLink from 'next/link';

export interface NavbarProps {
  items: {
    label: string;
    to: string;
  }[];
}

export const Navbar: FC<NavbarProps> = ({ items }) => {
  return (
    <Nav>
      <NextLink href="/">
        <LogoLink>
          <Logo />
        </LogoLink>
      </NextLink>
      <DesktopMenu>
        {items.map((item) => (
          <NavItem key={`menu-${item.label}`}>
            <NextLink href={item.to}>
              <NavLink>{item.label}</NavLink>
            </NextLink>
          </NavItem>
        ))}
      </DesktopMenu>
    </Nav>
  );
};
