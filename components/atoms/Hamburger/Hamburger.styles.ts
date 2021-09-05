import styled, { css } from 'styled-components';
interface InnerProps {
  $isActive?: boolean;
}

export const Container = styled.button`
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
`;

export const Box = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

export const Inner = styled.div<InnerProps>`
  top: 50%;
  display: block;
  margin-top: -2px;

  &,
  &:after,
  &:before {
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: red;
  }

  &:after,
  &:before {
    display: block;
    content: '';
  }

  &:after {
    bottom: -10px;
  }

  &:before {
    top: -10px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &:before {
        transform: translate3d(-8px, 0, 0) rotate(-45deg) scaleX(0.7);
      }

      &:after {
        transform: translate3d(-8px, 0, 0) rotate(45deg) scaleX(0.7);
      }
    `}
`;
