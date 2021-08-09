import { AppProps } from 'next/app';
import { Menu } from '../components/atoms';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Menu
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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
