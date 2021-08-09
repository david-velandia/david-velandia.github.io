import { FC } from 'react';
import NextLink from 'next/link';
import { MainLogo } from './icons';

export interface MenuProps {
  items: {
    label: string;
    to: string;
  }[];
}

export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <header>
      <MainLogo />
      <nav>
        {items.map((item) => (
          <NextLink key={`menu-${item.label}`} href={item.to}>
            {item.label}
          </NextLink>
        ))}
      </nav>
    </header>
  );
};
