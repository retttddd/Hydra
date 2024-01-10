import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataGridDemo from "./components/Grid";
import { useState, useEffect } from "react";
import CollapsibleAlert from "./components/reusableAlert";
import ButtonGr from "./components/ButtonGr";
import SimpleSnackbar from "./components/reusableSnackbar";

function App() {
  const updateEndpoint = "/api/update";

  const [tableDatax, setTableDatax] = useState([]);
  const [alertState, setAlertState] = React.useState([false, ""]);
  const [emptyArray, setEmptyArray] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetch("/api/get")
      .then((data) => data.json())
      .then((data) => setTableDatax(data))
      .catch((error) => showErrorAlert(error.message));
  }, []);

  const updateSender = () => {
    handleSnackeOpen();
    fetch(updateEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: emptyArray }),
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
        <ButtonGr onRefresh={updateSender} />
        <SimpleSnackbar isOpen={open} handleClose={handleSnackeClose} />
      </header>
    </div>
  );
}

export default App;
