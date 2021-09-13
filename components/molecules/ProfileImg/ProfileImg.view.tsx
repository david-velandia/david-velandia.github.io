import React, { FC } from 'react';
import { IconProfile } from '@/atoms';
import { Container } from './ProfileImg.styles';

interface ProfileImgProps {
  url?: string;
  className?: string;
}

export const ProfileImg: FC<ProfileImgProps> = ({ url, className }) => {
  return (
    <Container className={className}>
      <IconProfile />
    </Container>
  );
};
