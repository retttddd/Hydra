import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { TextField } from "@mui/material";
import { useRef } from "react";
import DialogContentText from "@mui/material/DialogContentText";

export default function NewPoolDialog(props) {
  const inputRef = useRef(null);
  const { onClose, isOpen, onSave } = props;
  const doSave = () => {
    onSave(inputRef.current.value);
    handleClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>MiauMiau</DialogTitle>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField inputRef={inputRef}></TextField>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={doSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <NewPoolDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
