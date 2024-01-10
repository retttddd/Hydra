import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import CollapsibleAlert from './reusableAlert';
import ButtonGr from './ButtonGr';




const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "pool_name",
    headerName: "pool_name",
    width: 150,
    editable: false,
  },

];


export default function DataGridDemo() {
  const [tableData, setTableData] = useState([])
  const [alertState, setAlertState] = React.useState([false,'']);
  const [emptyArray, setEmptyArray] = useState([]);
  

  useEffect(() => {
    fetch("/api/get")
      .then((data) => data.json())
      .then((data) => setTableData(data))
      .catch(error => showErrorAlert(error.message)) 

  }, [])      

  const handleRowSelectionModelChange = (rowSelection) =>{
  
    setEmptyArray([...rowSelection])
  }

  const showErrorAlert = (error) => {
    setAlertState({ isOpen: true, message: error });
  };

  const closeErrorAlert = () => {
    setAlertState({ isOpen: false, message: '' });
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <CollapsibleAlert isOpen={alertState.isOpen} message={alertState.message} onClose={closeErrorAlert} />
      <DataGrid
        rows={tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
              pageSizeOptions : 6,
            },
          },
        }}
        sx={{
          boxShadow: 3,
          border: 0,
          borderRadius: 5,
          borderColor: "black",
          
          backgroundColor: "white",
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleRowSelectionModelChange}
      />
      <ButtonGr myArray={emptyArray} />
    </Box>
  );
}
