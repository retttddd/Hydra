import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonGr(props) {
  const handlePush = () => {};

  const handleRefresh = () => {
    props.onRefresh();
  };

  const handleDelete = () => {};

  return (
    <div
      className="d-flex align-items-start"
      style={{ marginRight: "10px", marginTop: "25px" }}
    >
      <div style={{ marginRight: "20px" }}>
        <Button
          style={{
            backgroundColor: "#57A889",
            borderRadius: "10px",
            border: "none",
            height: "45px",
            width: "90px",
            boxShadow: "0 0 12px rgba(0.5, 0, 0, 0.4)",
          }}
          onClick={handlePush}
        >
          Push
        </Button>
      </div>
      <div style={{ marginRight: "20px" }}>
        <Button
          style={{
            backgroundColor: "#57A889",
            borderRadius: "10px",
            border: "none",
            height: "45px",
            width: "90px",
            boxShadow: "0 0 12px rgba(0.5, 0, 0, 0.4)",
          }}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </div>
      <div style={{ marginRight: "20px" }}>
        <Button
          style={{
            backgroundColor: "#57A889",
            borderRadius: "10px",
            border: "none",
            height: "45px",
            width: "90px",
            boxShadow: "0 0 12px rgba(0.5, 0, 0, 0.4)",
          }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
