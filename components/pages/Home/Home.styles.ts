import {
  Button as AtomButton,
  IconMail as AtomIconMail,
  IconLinkedIn as AtomIconLinkedIn,
} from '@/atoms';
import styled from 'styled-components';

export const MainText = styled.p`
  font-size: 20px;
  font-weight: 300;
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.query.tablet} {
    width: calc(100% - 20px);
  }
  ${({ theme }) => theme.query.desktop} {
    width: calc(100% - 20px);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainBlack};
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const ListText = styled.span`
  font-size: 18px;
  padding-left: 6px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.query.tablet} {
    font-size: 20px;
    padding-left: 12px;
  }
  ${({ theme }) => theme.query.desktop} {
    font-size: 20px;
    padding-left: 12px;
  }
`;

export const Button = styled(AtomButton)`
  width: 100%;
  max-width: 280px;
  padding: 20px;
  font-size: 22px;
  margin-top: 25px;
`;

export const IconMail = styled(AtomIconMail)`
  max-width: 50px;
  width: 12%;
  height: auto;
  min-width: 35px;
`;

export const IconLinkedIn = styled(AtomIconLinkedIn)`
  max-width: 50px;
  width: 12%;
  height: auto;
  min-width: 35px;
`;
