import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataGridDemo from "./components/Grid";
import { useState, useEffect } from "react";
import CollapsibleAlert from "./components/reusableAlert";
import ButtonGr from "./components/ButtonGr";
import SimpleSnackbar from "./components/reusableSnackbar";
import NewPoolDialog from "./components/NewPoolDialog";

function App() {
  const updateEndpoint = "/api/data";

  const [tableDatax, setTableDatax] = useState([]);
  const [alertState, setAlertState] = React.useState([false, ""]);
  const [emptyArray, setEmptyArray] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [newPoolDialogOpen, setNewPoolDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setNewPoolDialogOpen(true);
  };
  const handleDialogClose = () => {
    setNewPoolDialogOpen(false);
  };

  useEffect(() => {
    fetch("/api/data")
      .then((data) => data.json())
      .then((data) => setTableDatax(data))
      .catch((error) => showErrorAlert(error.message));
  }, []);

  const updateSender = () => {
    handleSnackeOpen();
    fetch(updateEndpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emptyArray),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        showErrorAlert(error.message);
      });
  };

  const handleSnackeOpen = () => {
    setOpen(true);
  };
  const handleSnackeClose = () => {
    setOpen(false);
  };

  const handleRowSelectionModelChange = (rowSelection) => {
    setEmptyArray([...rowSelection]);
  };
  const onSaveNewPoolItem = (value) => {
    console.log(value);
  };

  const showErrorAlert = (error) => {
    setAlertState({ isOpen: true, message: error });
  };

  const closeErrorAlert = () => {
    setAlertState({ isOpen: false, message: "" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <CollapsibleAlert
          isOpen={alertState.isOpen}
          message={alertState.message}
          onClose={closeErrorAlert}
        />
        <DataGridDemo
          tableData={tableDatax}
          onChange={handleRowSelectionModelChange}
        />
        <ButtonGr onRefresh={updateSender} onNew={handleDialogOpen} />
        <SimpleSnackbar isOpen={open} handleClose={handleSnackeClose} />
        <NewPoolDialog
          isOpen={newPoolDialogOpen}
          onClose={handleDialogClose}
          onSave={onSaveNewPoolItem}
        />
      </header>
    </div>
  );
}

export default App;
