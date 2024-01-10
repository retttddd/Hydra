import React from 'react';
import { Button } from 'react-bootstrap';  



export default function ButtonGr({ myArray }) {
  const updateEndpoint = '/api/update'

  const updateSender = () => {
    fetch(updateEndpoint, {
      method: 'POST',
      mode: 'no-cors',
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
  
  updateSender();

  };
  

  const handleDelete = () => {
    
    console.log({ myArray });
  };

 

  return (
    <div className='d-flex align-items-start' style={{ marginRight: '10px', marginTop: '25px'}}>
      <div style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: '#57A889', borderRadius: '10px', border: 'none', height: '45px', width: '90px', boxShadow: '0 0 12px rgba(0.5, 0, 0, 0.4)'  }} onClick={handlePush}>
          Push
        </Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: '#57A889', borderRadius: '10px', border: 'none', height: '45px', width: '90px', boxShadow: '0 0 12px rgba(0.5, 0, 0, 0.4)' }} onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: '#57A889', borderRadius: '10px', border: 'none', height: '45px', width: '90px', boxShadow: '0 0 12px rgba(0.5, 0, 0, 0.4)' }} onClick={handleDelete}>
          Delete
        </Button>
      </div>
      
    </div>
  );
  
}

