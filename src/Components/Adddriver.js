import React, { useRef, useState } from 'react';

const Adddriver = () => {
  const [Adddriver, setAdddriver] = useState('');
  const drivername = useRef();
  const dob = useRef();
  const phoneno = useRef();
  const liscene = useRef();


  const AddDriver = async () => {
  
  
    var jsonData = {
      "Drivername": drivername.current.value,
      "Dob": dob.current.value,
      "Phoneno": phoneno.current.value,
      "Liscene": liscene.current.value,
      "Status":false
    };

    if (Object.values(jsonData).some(value => value === '')) {
      alert('Please fill in all fields.');
      return;
    }

    console.log(jsonData);

    try {
      const response = await fetch(`https://localhost:7244/api/adddriver`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userData = await response.json();
      console.log(userData);

      if (userData === 1) {
        console.log("yes");
        setAdddriver("Successfully driver has been added.");
      } else {
        console.log("no");
        setAdddriver("Unable to add driver for you.");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Adding driver failed. An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Add Driver</h2>
      <form>
        <label>
          Driver Name:
          <input type="text" name="drivername" ref={drivername} />
        </label>
        <br />

        <label>
          Date of Birth:
          <input type="date" name="dob" ref={dob} />
        </label>
        <br />

        <label>
          Phone Number:
          <input type="text" name="phoneno" ref={phoneno} />
        </label>
        <br />

        <label>
          License:
          <input type="text" name="liscene" ref={liscene} />
        </label>
        <br />

        <button type="button" onClick={AddDriver} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Add Driver
        </button>
      </form>
      {Adddriver && <p>{Adddriver}</p>}
    </div>
  );
};

export default Adddriver;
