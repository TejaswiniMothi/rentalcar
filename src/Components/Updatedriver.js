import React, { useRef, useState } from 'react';

const Updatedriver = () => {
  const [updateMessage, setUpdateMessage] = useState('');
  

  const drivername = useRef();
  const dob = useRef();
  const phoneno = useRef();
  const Driverid = useRef();
  const Liscene = useRef();

  const st=new URLSearchParams(window.location.search);
const[drivername1,setdrivername]=useState(st.get('drivername'))
const[dob1,setdob]=useState(st.get('dob'))
const[phoneno1,setphoneno]=useState(st.get('phoneno'))
const[Driverid1,setDriverid]=useState(st.get('driverid'))
const[Liscene1,setLiscene]=useState(st.get('liscene'))




  const clearForm = () => {
    drivername.current.value = '';
    dob.current.value = '';
    phoneno.current.value = '';
    Driverid.current.value = '';
    Liscene.current.value = '';
  };

  const Updatedriver = async () => {
    try {
      const jsonData = {
        "Drivername": drivername.current.value,
        "Dob": dob.current.value,
        "Phoneno": phoneno.current.value,
        "Driverid": parseInt(Driverid.current.value),
        "Liscene": Liscene.current.value,
        "Status": false,
      };

      if (Object.values(jsonData).some(value => value === '')) {
        setUpdateMessage('Please fill in all fields.');
        return;
      }



      const response = await fetch(`https://localhost:7244/api/updatedriver`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userData = await response.json();

      if (userData === 1) {
        setUpdateMessage('Driver successfully updated.');
        clearForm(); 
      } else {
        setUpdateMessage('Unable to update driver. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setUpdateMessage('Updating driver failed. An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Update Driver</h2>
      <form>
        <label>
          Driver Name:
          <input type="text" name="drivername" defaultValue={drivername1} ref={drivername} />
        </label>
        <br />

        <label>
          Date of Birth:
          <input type="date" name="dob" defaultValue={dob1} ref={dob} />
        </label>
        <br />

        <label>
          Phone Number:
          <input type="text" name="phoneno"defaultValue={phoneno1} ref={phoneno} />
        </label>
        <br />

        <label>
          Driverid:
          <input type="text" name="Driverid"defaultValue={Driverid1} ref={Driverid} />
        </label>
        <br />

        <label>
          Liscene:
          <input type="text" name="Liscene"defaultValue={Liscene1} ref={Liscene} />
        </label>
        <br />

        <button
          type="button"
          onClick={Updatedriver}
          style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Update Driver
        </button>
      </form>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
};

export default Updatedriver;
