import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondary400: string;
      secondary600: string;
      white: string;
      mainBlack: string;
    };
    breakpoints: {
      desktop: number;
      tablet: number;
      mobile: number;
    };
    query: {
      desktop: string;
      tablet: string;
    };
    width?: number;
  }
}
