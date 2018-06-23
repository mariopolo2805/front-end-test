import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Main = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  flexBasis: '100%',
});

const App = ({ children }) => <Main>{children}</Main>;

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: <div />,
};
export default App;
