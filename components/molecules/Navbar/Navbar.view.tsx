import React, { FC, useState } from 'react';
import NextLink from 'next/link';

import { Logo } from '@/atoms/Icons';
import { Hide } from '@/atoms';
import {
  DesktopMenu,
  LogoLink,
  MobileContainer,
  MobileHamburger,
  MobileList,
  Nav,
  NavItem,
  NavLink,
} from './Navbar.styles';

export interface NavbarProps {
  items: {
    label: string;
    to: string;
  }[];
}

export const Navbar: FC<NavbarProps> = ({ items }) => {
  const [isActive, setIsActive] = useState(false);

  function handleHamburgerClick() {
    setIsActive((current) => !current);
  }

  return (
    <Nav>
      <Hide devices={['desktop']}>
        <MobileHamburger isActive={isActive} onClick={handleHamburgerClick} />
        {isActive && (
          <MobileContainer>
            <MobileList>
              {items.map((item) => (
                <NavItem key={`menu-${item.label}`}>
                  <NextLink href={item.to}>
                    <NavLink>{item.label}</NavLink>
                  </NextLink>
                </NavItem>
              ))}
            </MobileList>
          </MobileContainer>
        )}
      </Hide>
      <NextLink href="/">
        <LogoLink>
          <Logo />
        </LogoLink>
      </NextLink>
      <Hide devices={['mobile', 'tablet']}>
        <DesktopMenu>
          {items.map((item) => (
            <NavItem key={`menu-${item.label}`}>
              <NextLink href={item.to}>
                <NavLink>{item.label}</NavLink>
              </NextLink>
            </NavItem>
          ))}
        </DesktopMenu>
      </Hide>
    </Nav>
  );
};
