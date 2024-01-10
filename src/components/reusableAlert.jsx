import React from "react";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const CollapsibleAlert = ({ isOpen, message, onClose }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Collapse in={isOpen}>
      <Alert
        severity="error"
        sx={{ display: "flex", alignItems: "center", mb: 2 }}
      >
        <span style={{ marginLeft: "8px", verticalAlign: "middle" }}>
          Can't display pools. Error occured {message}. You can try to
        </span>

        <Link
          component="button"
          color="inherit"
          underline="hover"
          onClick={handleRefresh}
          sx={{
            verticalAlign: "middle",
            marginLeft: "8px",
            fontWeight: "bold",
          }}
        >
          refresh the page
        </Link>
        <IconButton
          aria-label="close"
          color="inherit"
          size="big"
          onClick={onClose}
          sx={{ verticalAlign: "middle" }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Alert>
    </Collapse>
  );
};

export default CollapsibleAlert;
