import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import App from '../components/App';
import NasaSearch from '../components/NasaSearch';
import NasaAsset from '../components/NasaAsset';
import NotFound from '../components/NotFound';

export const routeCodes = {
  NASA_SEARCH: '/search',
  NASA_ASSET: '/asset/:id/:title/:description',
};

const Routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path={routeCodes.NASA_SEARCH} component={NasaSearch} />
        <Route exact path={routeCodes.NASA_ASSET} component={NasaAsset} />
        <Route
          exact
          path="/"
          render={() => <Redirect to={routeCodes.NASA_SEARCH} />}
        />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default Routes;
