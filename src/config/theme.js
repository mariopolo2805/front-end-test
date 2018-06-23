import { createMuiTheme } from '@material-ui/core/styles';

import { blueGrey, blue, red } from '@material-ui/core/colors';

const primary = blueGrey;
const secondary = blue;
const error = red;

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    error,
  },
  status: {
    primary: primary[700],
    secondary: secondary[500],
    error: error[500],
  },
});

export default theme;
