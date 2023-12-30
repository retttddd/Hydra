

import React from 'react';
import { Button } from 'react-bootstrap';  // Assuming you're using Bootstrap

export default function ButtonGr() {
  const handlePush = () => {
    
  };

  const handleRefresh = () => {
    // Your logic for the Refresh button
    console.log('Refresh button clicked');
  };

  const handleDelete = () => {
    // Your logic for the Delete button
    console.log('Delete button clicked');
  };

  return (
    <div className='d-flex flex-column align-items-start'>
      <div className='buttonGr'>
        <Button variant='success' onClick={handlePush}>
          Push
        </Button>
      </div>
      <div>
        <Button variant='warning' onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <div>
        <Button variant='danger' onClick={handleDelete}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

