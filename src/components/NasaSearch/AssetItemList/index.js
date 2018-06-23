import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import AssetItem from '../AssetItem';

const styles = () => ({
  content: {
    textAlign: 'center',
  },
  gridList: {
    maxWidth: 1280,
  },
});

const parseParamUrl = param => {
  if (param.length > 2000) {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }
  return encodeURI(param.replace(/((\w+:|^)\/\/(.)*)/, '').replace(/\//, ''));
};

class AssetItemList extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      loading: props.loading,
      items: props.assetList,
      cols: 4,
    };

    const mql = window.matchMedia('(max-width: 600px)');
    this.getResponsiveCols = this.getResponsiveCols.bind(this);
    mql.addListener(this.getResponsiveCols);
    window.onload = () => this.getResponsiveCols(mql);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.assetList, loading: nextProps.loading });
  }

  getResponsiveCols(mql) {
    let cols = 4;
    if (mql.matches) {
      cols = 2;
    }
    this.setState(() => ({ cols }));
  }

  render() {
    return (
      <div className={this.classes.content}>
        {this.state.loading && <CircularProgress size={50} />}
        {!this.state.loading &&
          this.state.items.length === 0 &&
          'No se encontraron resultados'}
        <GridList
          cellHeight={'auto'}
          className={this.classes.gridList}
          cols={this.state.cols}
        >
          {this.state.items.map(({ data = [], links = [] }) => {
            /* eslint camelcase: 0 */
            const { nasa_id, title, description } = data[0];
            return (
              <a
                className="anchor"
                key={nasa_id}
                href={`asset/${nasa_id}/${title}/${parseParamUrl(
                  `${description}`
                )}`}
              >
                <GridListTile cols={1}>
                  <AssetItem data={data[0]} link={links[0]} />
                </GridListTile>
              </a>
            );
          })}
        </GridList>
      </div>
    );
  }
}

AssetItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  assetList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AssetItemList);
