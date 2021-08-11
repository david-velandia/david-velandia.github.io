import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      mainBlack: string;
    };
    breakpoints: {
      desktop: string;
    };
  }
}
