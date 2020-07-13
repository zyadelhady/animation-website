import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    font: {
      mainSize: string;
      secondrySize: string;
      main: string;
      regularWeight: number;
      mediumWeight: number;
      boldWeight: number;
    };

    colors: {
      white: string;
      black: string;
      grey: string;
      bg: string;
    };
  }
}
