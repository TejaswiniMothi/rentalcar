import React, { useRef, useState } from 'react';

const Updatecar = () => {
  const [Updatecars, setUpdatecars] = useState('');
  const carname = useRef();
  const mileage = useRef();
  const color = useRef();
  const fuel = useRef();
  const cost = useRef();
  const capacity = useRef();
  const image = useRef();
  const startdate = useRef();
  const Carno=useRef();
const st=new URLSearchParams(window.location.search);
const[carno1,setcarno]=useState(st.get('carno'))
const[carname1,setcarname]=useState(st.get('carname'))
const[mileage1,setmileage]=useState(st.get('mileage'))
const[color1,setcolor]=useState(st.get('color'))
const[fuel1,setfuel]=useState(st.get('fuel'))
const[cost1,setcost]=useState(st.get('cost'))
const[capacity1,setcapacity]=useState(st.get('capacity'))
const[image1,setimage]=useState(st.get('image'))
const[startdate1,setstartdate]=useState(st.get('startdate'))




  const Updatecar = async () => {
    var jsonData = {
      "carname": carname.current.value,
      "mileage": parseFloat(mileage.current.value),
      "color": color.current.value,
      "fuel": fuel.current.value,
      "cost":parseFloat( cost.current.value),
      "capacity": parseInt(capacity.current.value),
      "image": image.current.value,
      "startdate": startdate.current.value,
      "Carno":Carno.current.value,
      "Status":false
    };

    if (Object.values(jsonData).some(value => value === '')) {
      alert('Please fill in all fields.');
      return;
    }

    console.log(jsonData);

    try {
      const response = await fetch(`https://localhost:7244/api/updatecar`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userData = await response.json();
      console.log(userData);

      if (userData === 1) {
        console.log("yes");
        setUpdatecars("Successfully car has been updated.");
      } else {
        console.log("no");
        setUpdatecars("Unable to update car for you.");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Updating car failed. An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Update Car</h2>
      <form>
        <label>
          Car Name:
          <input type="text" name="carname"defaultValue={carname1} ref={carname} />
        </label>
        <br />

        
        <label>
        Carno:
          <input type="text" name="Carno" defaultValue={carno1} ref={Carno} />
        </label>
        <br />


        <label>
          Mileage:
          <input type="text" name="mileage" defaultValue={mileage1} ref={mileage} />
        </label>
        <br />

        <label>
          Color:
          <input type="text" name="color" defaultValue={color1}  ref={color} />
        </label>
        <br />

        <label>
          Fuel:
          <input type="text" name="fuel" defaultValue={fuel1} ref={fuel} />
        </label>
        <br />

        <label>
          Cost:
          <input type="text" name="cost"  defaultValue={cost1} ref={cost} />
        </label>
        <br />

        <label>
          Capacity:
          <input type="text" name="capacity"  defaultValue={capacity1} ref={capacity} />
        </label>
        <br />

        <label>
          Image URL:
          <input type="text" name="image" defaultValue={image1}  ref={image} />
        </label>
        <br />

        <label>
          Start Date:
          <input type="date" name="startdate"  defaultValue={startdate1}vref={startdate} />
        </label>
        <br />


        <button type="button" onClick={Updatecar} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          update Car
        </button>
      </form>
      {Updatecar && <p>{Updatecar}</p>}
    </div>
  );
};

export default Updatecar;
