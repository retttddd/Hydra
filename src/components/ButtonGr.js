

import React from 'react';
import { Button } from 'react-bootstrap';  // Assuming you're using Bootstrap

export default function ButtonGr({ myArray }) {
  const handlePush = () => {
    
  };

  const handleRefresh = () => {
    // Your logic for the Refresh button
    console.log('Refresh button clicked');
  };

  const handleDelete = () => {
    // Your logic for the Delete button
    console.log({ myArray });
  };

  return (
    <div className='d-flex  align-items-start' style={{ marginTop: '80px' }}>
      <div>
        <Button variant='success' onClick={handlePush}>
          Push
        </Button>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <Button variant='warning' onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <Button variant='danger' onClick={handleDelete}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

