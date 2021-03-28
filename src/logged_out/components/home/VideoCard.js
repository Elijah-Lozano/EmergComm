import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.primary.main
  }
});

function PriceCard(props) {
  const { classes, theme, title, pricing, features, highlighted } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Box mb={2}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OC9vnISihKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>
      
      ))}
    </div>
  );
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(VideoCard);
