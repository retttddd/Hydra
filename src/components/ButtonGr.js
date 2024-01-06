

import React from 'react';
import { Button } from 'react-bootstrap';  // Assuming you're using Bootstrap

export default function ButtonGr({ myArray }) {
  const updateEndpoint = 'http://localhost:8080/update'

  const updateSender = () => {
    fetch(updateEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: myArray }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Server response:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handlePush = () => {
    
  };

  const handleRefresh = () => {
  if (myArray.length === 0){
   console.log('nothing to refresh')
  } else{
    console.log('refreshing ' + myArray + ' pool')
  }

  };
  

  const handleDelete = () => {
    
    console.log({ myArray });
  };

 

  return (
    <div className='d-flex  align-items-start' style={{ marginRight: '10px' }}>
      <div style={{ marginRight: '10px' }}>
        <Button variant='success' onClick={handlePush}>
          Push
        </Button>
      </div>
      <div style={{ marginRight: '10px' }}>
        <Button variant='warning' onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <div style={{ marginRight: '10px' }}>
        <Button variant='danger' onClick={handleDelete}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

