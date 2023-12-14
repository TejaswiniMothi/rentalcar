import React, { useRef, useState } from 'react';

const Removecar = () => {
  const carNo = useRef('');
  const [message, setUpdateMessage] = useState(null);

  const st = new URLSearchParams(window.location.search);
  const [carNo1, setCarNo1] = useState(st.get('carNo'));

  const handleChange = (e) => {
    setCarNo1(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Removecars();
  };

  const Removecars = async () => {
    var carNoValue = carNo1;

    try {
      const response = await fetch(`https://localhost:7244/api/deletecar/${carNoValue}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carId: carNoValue }),
      });

      if (response.ok) {
        const userData = await response.json();

        if (userData === 1) {
          setUpdateMessage('Car successfully deleted.');
        } else {
          setUpdateMessage('Unable to delete car. Please try again.');
        }
      } else {
        setUpdateMessage(`Failed to delete car. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setUpdateMessage('Deleting car failed. An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Remove Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Car Number:
          <input type="text" name="carno" defaultValue={carNo1} ref={carNo} style={{ margin: '10px', padding: '5px' }} />
        </label>
        <br />

        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Remove Car
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Removecar;
