import { Navbar } from '@/molecules/Navbar';
import { Header, Main } from './MainLayout.styles';

export const MainLayout = ({ children }) => (
  <>
    <Header>
      <Navbar
        items={[
          {
            to: '#skills',
            label: 'Skills',
          },
          {
            to: '#career',
            label: 'Career',
          },
          {
            to: '#experience',
            label: 'Experience',
          },
          {
            to: '#blog',
            label: 'Blog',
          },
        ]}
      />
    </Header>
    <Main>{children}</Main>
  </>
);
