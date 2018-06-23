import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    boxShadow: 'none',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  typography: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const audioUrl =
  'https://i.pinimg.com/736x/ef/34/b7/ef34b7a431ea66d05bac4a3bef118c32--flat-icons-flats.jpg';

const AssetItem = ({ classes, data, link }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={link.href || audioUrl}
      title={data.title}
    />
    <CardContent>
      <Typography
        className={classes.typography}
        gutterBottom
        variant="headline"
        component="h2"
      >
        {data.title}
      </Typography>
    </CardContent>
  </Card>
);

AssetItem.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  link: PropTypes.object,
};

AssetItem.defaultProps = {
  link: {},
};

export default withStyles(styles)(AssetItem);
