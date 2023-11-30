import { css } from '@emotion/react';

export const lightTheme = {
  bg: '#fff',
  primary: '#42393d',

  nodeColor: '#222',
  nodeBorder: '#222',

  controlsBg: '#fefefe',
  controlsBgHover: '#eee',
  controlsColor: '#222',
  controlsBorder: '#ddd',
};

export const darkTheme = {
  bg: '#000',
  primary: '#ff0072',

  nodeColor: '#f9f9f9',
  nodeBorder: '#888',

  controlsBg: '#555',
  controlsBgHover: '#676768',
  controlsColor: '#dddddd',
  controlsBorder: '#676768',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};


export const getGlobalStyles = ({ baseTheme}) =>
  css`
    *  {
      color: ${baseTheme?.primary};
    }

    body {
      background-color: ${baseTheme?.bg};
    }

    a {
      color: ${baseTheme?.nodeColor};
    }
  `;
