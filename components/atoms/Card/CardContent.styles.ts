import styled from 'styled-components';
import { CardContentProps } from './CardContent';

interface ContentProps {
  $direction: CardContentProps['direction'];
}

export const Content = styled.div<ContentProps>`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ $direction }) => $direction};
`;
