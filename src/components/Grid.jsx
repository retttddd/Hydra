import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "pool_name",
    headerName: "pool_name",
    width: 150,
    editable: false,
  },
];

export default function DataGridDemo(props) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
              pageSizeOptions: 6,
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
        onRowSelectionModelChange={props.onChange}
      />
    </Box>
  );
}
