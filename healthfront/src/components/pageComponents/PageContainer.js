import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  container: {
    minWidth: "95vw",
    border: "1px solid blue"
  },
  userContainer: {
    border: "1px solid blue"
  }
});

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid className={classes.userContainer} item xs={6}>
            user1
          </Grid>
          <Grid className={classes.userContainer} item xs={6}>
            user2
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PageContainer);
