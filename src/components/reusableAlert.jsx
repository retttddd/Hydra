import React from 'react';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CollapsibleAlert = ({ isOpen, message, onClose }) => {
  return (
    <Collapse in={isOpen}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="big"
            onClick={onClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        Error occurred: {message}
      </Alert>
    </Collapse>
  );
};

export default CollapsibleAlert;