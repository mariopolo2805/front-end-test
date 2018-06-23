import React from 'react';
import 'babel-polyfill';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'glamorous';

import appTheme from './theme';

const Providers = props => (
  <MuiThemeProvider theme={appTheme}>
    <ThemeProvider theme={appTheme} {...props} />
  </MuiThemeProvider>
);

export default Providers;
