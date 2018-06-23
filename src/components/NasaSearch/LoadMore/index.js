import React from 'react';
import PropTypes from 'prop-types';

class LoadMore extends React.Component {
  state = {
    current: 0,
    items: this.props.items,
    index: this.props.index,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.items.length === 0 && nextProps.items.length > 0) {
      this.setState({ items: nextProps.items }, this.handleChange);
    }
  }

  handleChange = () => {
    const newCurrent = this.state.current + this.state.index;
    const itemsToView = this.state.items.slice(0, newCurrent);
    this.setState({ current: newCurrent });
    this.props.recoverItems(itemsToView);
  };

  render() {
    return (
      <a href="#" onClick={this.handleChange}>
        Load More
      </a>
    );
  }
}

LoadMore.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  recoverItems: PropTypes.func.isRequired,
};

LoadMore.defaultProps = {
  index: 6,
};

export default LoadMore;
