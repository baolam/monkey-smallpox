import React from 'react'

import { styled } from '@mui/material/styles';

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  Button
} from '@mui/material';

import { Close } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function MyModal(prop) {
  let { title, handleClose, open, children, actions } = prop;

  return (
    <BootstrapDialog
      onClose={handleClose}
      open={open}
    >
      <BootstrapDialogTitle onClose={ handleClose }>
        { title }
      </BootstrapDialogTitle>
      <DialogContent dividers>
        { children }
      </DialogContent>
      <DialogActions>
        { actions }
        <Button autoFocus onClick={ handleClose }>
          Đóng đơn
        </Button>
      </DialogActions>
    </BootstrapDialog>
  )
}

export default MyModal;