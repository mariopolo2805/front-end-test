import React from 'react';
import glamorous from 'glamorous';

import FormControl from '@material-ui/core/FormControl';

import SearchInput from './SearchInput';
import LoadMore from './LoadMore';
import MediaType from './MediaType';
import AssetItemList from './AssetItemList';

import api from '../../config/api';

const defaultSearch = 'Moon';

const Layout = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

class NasaSearch extends React.Component {
  state = {
    loading: true,
    checkedImages: true,
    checkedAudios: false,
    items: [],
    itemsToView: [],
    query: {
      q: defaultSearch,
      description: defaultSearch,
      mediaType: 'image',
    },
  };

  componentDidMount() {
    this.getSearchRequest(
      this.state.query.q,
      this.state.query.description,
      this.state.query.mediaType
    );
  }

  getSearchRequest(q, description, mediaType) {
    this.setState({ loading: true });
    api.getSearchRequest(q, description, mediaType).then(res => {
      const items = res.data.collection.items;
      this.setState({ items, loading: false });
    });
  }

  getMediaTypeQuery = ({ checkedImages, checkedAudios }) => {
    let query = '';
    if (checkedImages) {
      query += 'image';
    }
    if (query !== '' && checkedAudios) {
      query += ',audio';
    } else if (checkedAudios) {
      query += 'audio';
    }
    return query;
  };

  handleMediaTypeChange = () => ({ checkedImages, checkedAudios }) => {
    this.setState({ checkedImages, checkedAudios });
    this.getSearchRequest(
      this.state.query.q,
      this.state.query.description,
      this.getMediaTypeQuery({ checkedImages, checkedAudios })
    );
  };

  handleSearchChange = () => search => {
    const mediaType = this.getMediaTypeQuery(this.state);
    this.setState({
      query: {
        q: search,
        description: search,
        mediaType,
      },
      items: [],
      itemsToView: [],
    });
    this.getSearchRequest(search, search, mediaType);
  };

  render() {
    return (
      <Layout>
        <FormControl component="search-form">
          <SearchInput
            query={this.state.query}
            onChange={this.handleSearchChange()}
          />
          <MediaType
            checkedImages={this.state.checkedImages}
            checkedAudios={this.state.checkedAudios}
            onChange={this.handleMediaTypeChange()}
          />
        </FormControl>
        <AssetItemList
          assetList={this.state.itemsToView}
          loading={this.state.loading}
        />
        <LoadMore
          key={this.state.query.q}
          items={this.state.items}
          recoverItems={items => this.setState({ itemsToView: items })}
        />
      </Layout>
    );
  }
}

export default NasaSearch;
