import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import VideoCard from "./VideoCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
    containerFix: {
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6)
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(7),
        paddingRight: theme.spacing(7)
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      },
      overflow: "hidden",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    cardWrapper: {
      [theme.breakpoints.down("xs")]: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 340
      }
    },
    cardWrapperHighlighted: {
      [theme.breakpoints.down("xs")]: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 360
      }
    }
  });

  
function VideogSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Should you take the COVID-19 Vaccine?
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <VideoCard
              title="Starter"
              pricing={
                <span>
                  $14.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Feature 1", "Feature 2", "Feature 3"]}
            />
          </Grid>
   
        </Grid>
      </div>
    </div>
  );
}

VideoSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(VideoSection)
);
