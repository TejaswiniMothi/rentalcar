import React, { useRef, useState } from 'react';

const Addcar = () => {
  const [AddCars, setAddCars] = useState('');
  const carname = useRef();
  const carno = useRef();
  const mileage = useRef();
  const color = useRef();
  const fuel = useRef();
  const cost = useRef();
  const capacity = useRef();
  const image = useRef();
  const startdate = useRef();

  const AddCar = async () => {
    var jsonData = {
      "Carname": carname.current.value,
      "Carno": carno.current.value,
      "Mileage": mileage.current.value,
      "Color":color.current.value,
      "Fuel": fuel.current.value,
      "Cost": cost.current.value,
      "Capacity": capacity.current.value,
      "Image": image.current.value,
      "Startdate": startdate.current.value,
      "Status":false
    };

    if (Object.values(jsonData).some(value => value === '')) {
      alert('Please fill in all fields.');
      return;
    }

    console.log(jsonData);

    try {
      const response = await fetch(`https://localhost:7244/api/addcar`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userData = await response.json();
      console.log(userData);

      if (userData === 1) {
        console.log("yes");
        setAddCars("Successfully car has been added.");
      } else {
        console.log("no");
        setAddCars("Unable to add car for you.");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Adding car failed. An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Add Car</h2>
      <form>
        <label>
          Car Name:
          <input type="text" name="carname" ref={carname} />
        </label>
        <br />

        <label>
          Car Number:
          <input type="text" name="carno" ref={carno} />
        </label>
        <br />

        <label>
          Mileage:
          <input type="text" name="mileage" ref={mileage} />
        </label>
        <br />

        <label>
          Color:
          <input type="text" name="color" ref={color} />
        </label>
        <br />

        <label>
          Fuel:
          <input type="text" name="fuel" ref={fuel} />
        </label>
        <br />

        <label>
          Cost:
          <input type="text" name="cost" ref={cost} />
        </label>
        <br />

        <label>
          Capacity:
          <input type="text" name="capacity" ref={capacity} />
        </label>
        <br />

        <label>
          Image URL:
          <input type="text" name="image" ref={image} />
        </label>
        <br />

        <label>
          Start Date:
          <input type="date" name="startdate" ref={startdate} />
        </label>
        <br />

        <button type="button" onClick={AddCar} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Add Car
        </button>
      </form>
      {AddCar && <p>{AddCar}</p>}
    </div>
  );
};

export default Addcar;
