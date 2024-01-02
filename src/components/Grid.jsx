import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import CollapsibleAlert from './reusableAlert';


const emptyArray = [];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "pool_name",
    headerName: "pool_name",
    width: 150,
    editable: false,
  },

];


  



const handleRowSelectionModelChange = (rowSelection) =>{
  emptyArray.length =[];
  emptyArray.push(rowSelection)
  console.log(emptyArray)
  
}

export default function DataGridDemo() {
  const [tableData, setTableData] = useState([])
  const [alertState, setAlertState] = React.useState([false,'']);
 

  useEffect(() => {
    fetch("http://localhost:8080/time")
      .then((data) => data.json())
      .then((data) => setTableData(data))
      .catch(error => showErrorAlert(error.message)) //str 88 +-

  }, [])

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
              pageSize: 5,
            },
          },
        }}
        sx={{
          boxShadow: 6,
          border: 3,
          borderRadius: 2,
          borderColor: "black",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          backgroundColor: "white",
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleRowSelectionModelChange}
      />
      
    </Box>
  );
}
