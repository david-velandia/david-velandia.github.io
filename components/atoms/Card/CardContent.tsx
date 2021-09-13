import React, { FC } from 'react';
import { Content } from './CardContent.styles';

export interface CardContentProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const CardContent: FC<CardContentProps> = ({ children, direction = 'column' }) => (
  <Content $direction={direction}>{children}</Content>
);
