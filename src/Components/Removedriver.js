import React, { useRef, useState } from 'react';

const Removedriver = () => {
  const driverId = useRef('');
  const [message, setUpdateMessage] = useState(null);
  const st=new URLSearchParams(window.location.search);
  const[driverId1,setdriverId]=useState(st.get('driverid'))


  const Removedrivers = async () => {
    var driverIdValue = parseInt(driverId.current.value);

    try {
      const response = await fetch(`https://localhost:7244/api/deletedriver/${driverId.current.value}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const userData = await response.json();

        if (userData === 1) {
          setUpdateMessage('Driver successfully deleted.');
        } else {
          setUpdateMessage('Unable to delete driver. Please try again.');
        }
      } else {
        setUpdateMessage(`Failed to delete driver. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setUpdateMessage('Deleting driver failed. An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Remove Driver</h2>

      <label>
        Driver ID:
      </label>
      <input type="text" name="driverId" defaultValue={driverId1}  ref={driverId} style={{ margin: '10px', padding: '5px' }} />
      <br />

      <button
        type="button"
        onClick={Removedrivers}
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Remove Driver
      </button>
      <label>{message}</label>
    </div>
  );
};

export default Removedriver;
