import React, { PropsWithChildren } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface AboutDialogProps {
  open: boolean;
  onClose(): void;
}

function AboutDialog({ open, onClose }: PropsWithChildren<AboutDialogProps>) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="xs">
      <DialogTitle>Appointement Details:</DialogTitle>
      <DialogContent>
        <DialogContentText>Client Name: Nawaf Momin</DialogContentText>
        <DialogContentText>Appointment Time: 10:30 AM 23 July 2020</DialogContentText>
        <DialogContentText>Appointment Duration: 60 Mins</DialogContentText>
        <DialogContentText>Doctor Name: Dr. Anglena Moss </DialogContentText>
        <DialogContentText>Billing: Self</DialogContentText>
        <DialogContentText>Fees: 100$</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AboutDialog;
