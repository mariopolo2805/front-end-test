import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      search: props.query.q,
    };
  }

  handleChange = event => {
    const search = event.target.value;
    this.setState({ search });
    this.props.onChange(search);
  };

  render() {
    return (
      <div>
        <div className={this.classes.margin}>
          <FormControl className={this.classes.formControl}>
            <InputLabel>NASA Search</InputLabel>
            <Input value={this.state.search} onChange={this.handleChange} />
          </FormControl>
          <Search />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchInput);
