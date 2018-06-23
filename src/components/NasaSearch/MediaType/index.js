import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import glamorous from 'glamorous';

class MediaType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedImages: props.checkedImages,
      checkedAudios: props.checkedAudios,
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    const newState = {
      checkedImages: this.state.checkedImages,
      checkedAudios: this.state.checkedAudios,
    };
    newState[name] = event.target.checked;
    this.props.onChange(newState);
  };

  render() {
    return (
      <FormGroup className="options" row>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!this.state.checkedImages}
              onChange={this.handleChange('checkedImages')}
              value="checkedImages"
              color="primary"
            />
          }
          label="Images"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={!!this.state.checkedAudios}
              onChange={this.handleChange('checkedAudios')}
              value="checkedAudios"
              color="primary"
            />
          }
          label="Audios"
        />
      </FormGroup>
    );
  }
}

MediaType.propTypes = {
  checkedImages: PropTypes.bool.isRequired,
  checkedAudios: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const StyledMediaType = glamorous(MediaType)({
  justifyContent: 'space-around',
});

export default StyledMediaType;
