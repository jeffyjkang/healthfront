import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PageViewIcon from "@material-ui/icons/Pageview";
import EditIcon from "@material-ui/icons/Edit";

const styles = () => ({
  container: {
    border: "1px solid #3F51B5",
    // height: 150,
    display: "flex"
  },
  cardContainer: {
    minWidth: "100%"
  },
  CardHead: {
    display: "flex",
    flexDirection: "column"
  },
  CardTail: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: 2
  }
});

const UserTwoPlan = props => {
  const { classes } = props;
  //   console.log(props);
  return (
    <div className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container>
          <Grid className={classes.CardHead} item xs={1}>
            <Chip variant="outlined" color="primary" label="Plan" />
            <Typography variant="caption">From:</Typography>
            <Chip
              variant="outlined"
              color="primary"
              label={props.userTwoPlan.fromDate}
            />
            <Typography variant="caption">To:</Typography>
            <Chip
              variant="outlined"
              color="primary"
              label={props.userTwoPlan.toDate}
            />
          </Grid>
          <Grid item xs={10}>
            <CardContent>Something</CardContent>
          </Grid>
          <Grid className={classes.CardTail} item xs={1}>
            <CardActions>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                <Typography variant="button">View Plan</Typography>
                <PageViewIcon />
              </Button>
            </CardActions>
            <CardActions>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                <Typography variant="button">Edit Plan</Typography>
                <EditIcon />
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default withStyles(styles)(UserTwoPlan);
