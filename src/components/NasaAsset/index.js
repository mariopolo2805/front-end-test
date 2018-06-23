import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import CircularProgress from '@material-ui/core/CircularProgress';

import api from '../../config/api';

const Layout = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '1280px',
  margin: '0 auto',
});

const Title = glamorous.div({
  margin: '30px 10px 20px 10px',
  fontSize: '36px',
  textAlign: 'center',
});

const Description = glamorous.div({
  margin: '0 14px 20px 14px',
  fontSize: '18px',
  textAlign: 'center',
});

const getMediaType = resource => {
  const ext = resource.substr(resource.lastIndexOf('.') + 1);
  switch (ext) {
    case 'mp3':
      return 'audio';
    case 'jpg':
      return 'image';
    default:
      return '';
  }
};

class NasaAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      asset: {
        id: props.match.params.id,
        title: props.match.params.title,
        description: props.match.params.description,
        mediaType: '',
        preview: '',
      },
    };
  }

  componentDidMount() {
    this.getAssetRequest(this.state.asset.id);
  }

  getAssetRequest(id) {
    this.setState({ loading: true });
    api.getAssetRequest(id).then(res => {
      const asset = Object.assign({}, this.state.asset);
      asset.preview = res.data.collection.items[0].href;
      asset.mediaType = getMediaType(asset.preview);
      this.setState({ asset, loading: false });
    });
  }

  render() {
    return (
      <Layout>
        <Title>{this.state.asset.title}</Title>
        <Description>{this.state.asset.description}</Description>
        {this.state.loading && <CircularProgress size={50} />}
        {this.state.asset.mediaType === 'image' && (
          <img
            src={this.state.asset.preview}
            alt={this.state.asset.title}
            className="responsive"
            width="600"
            height="400"
          />
        )}
        {this.state.asset.mediaType === 'audio' && (
          <audio controls>
            <track kind="captions" />
            <source src={this.state.asset.preview} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </Layout>
    );
  }
}

NasaAsset.propTypes = {
  match: PropTypes.object.isRequired,
};

export default NasaAsset;
