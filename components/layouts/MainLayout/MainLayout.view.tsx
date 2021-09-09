import { Navbar } from '@/molecules/Navbar';
import { useTranslation } from 'react-i18next';

import { Header, Main } from './MainLayout.styles';

export const MainLayout = ({ children }) => {
  const [t] = useTranslation();

  return (
    <>
      <Header>
        <Navbar
          items={[
            {
              to: '#skills',
              label: t('cv.menu.skills'),
            },
            {
              to: '#career',
              label: t('cv.menu.career'),
            },
            {
              to: '#experience',
              label: t('cv.menu.experience'),
            },
          ]}
        />
      </Header>
      <Main>{children}</Main>
    </>
  );
};
