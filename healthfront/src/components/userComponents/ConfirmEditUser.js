import React from "react";
//
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = () => ({
  container: {
    display: "flex"
  },
  dialogActions: {
    display: "flex",
    justifyContent: "space-around"
  }
});

const ConfirmEditUser = props => {
  const { classes } = props;
  return (
    <div>
      <Dialog
        maxWidth={"sm"}
        open={props.confirmEditUserOpen}
        onClose={props.handleConfirmEditUserClose}
        aria-labelledby="confirmEdit-user-title"
      >
        <DialogTitle id="confirmEdit-user-title">
          Confirm Edit User Information of: {props.username}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="subtitle1">
            Are you sure you want to edit user Information?
          </Typography>
          <DialogActions className={classes.dialogActions}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={props.handleConfirmEditUserClose}
            >
              <Typography variant="button">Cancel</Typography>
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="default"
              onClick={props.submitUpdateUser}
            >
              <Typography variant="button">Confirm</Typography>
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(ConfirmEditUser);
