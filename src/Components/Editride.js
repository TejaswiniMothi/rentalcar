
import React, { useRef, useState} from 'react';
import { Link } from 'react-router-dom';

const Editride = () => {
  const [Editride, setEditride] = useState('');

  const pickupdate = useRef();
  const dropdate = useRef();
  const pickuptime = useRef();
  const droptime = useRef();
  const pickuplocation = useRef();
  const droplocation = useRef();

  const st=new URLSearchParams(window.location.search);
const[pickupdate1,setpickupdate]=useState(st.get('pickupdate'))
const[dropdate1,setdropdate]=useState(st.get('dropdate'))
const[pickuptime1,setpickuptime]=useState(st.get('pickuptime'))
const[droptime1,setdroptime]=useState(st.get('droptime'))
const[pickuplocation1,setpickuplocation]=useState(st.get('pickuplocation'))
const[droplocation1,setdroplocation]=useState(st.get('droplocation'))




    const containerStyle = {
        textAlign: 'center',
      };
    
      const buttonStyle = {
        backgroundColor: 'green',
        borderRadius: '8px',
        padding: '10px 20px', 
        color: 'white',
        cursor: 'pointer',
      };
    
    return (
        <div style={containerStyle}>
        <h2>Search for Car Rental</h2>
        <div>
          <label>Enter pickup date:</label>&nbsp;
          <label>
            <input type="date" className="form-control"  defaultValue={pickupdate}/> 
          </label>
        </div>
  
        <div>
          <label>Enter drop date:</label>&nbsp;
          <label>
            <input type="date" className="form-control" defaultValue={dropdate} />
          </label>
        </div>
        <br />
        <div>
          <label>Enter pickup time:</label>&nbsp;
          <label>
            <input type="time" className="form-control" defaultValue={pickuptime} />
          </label>
        </div>
  
        <div>
          <label>Enter drop time:</label>&nbsp;
          <label>
            <input type="time" className="form-control" defaultValue={droptime}/>
          </label>
        </div>
        <br />
        <div>
          <label>Enter pickup location:</label>&nbsp;
           <select defaultValue={pickuplocation}>
              <option> hyderbad </option>
              <option> banglore  </option>
              <option> chennai</option>
              <option> kerala</option>
              <option> chennai</option>
              <option> goa</option>
              <option> mumbai</option>
              <option> delhi</option>
           </select>
        </div>
        <div>
          <label>Enter drop location:</label>&nbsp;
           <select defaultValue={droplocation}>
              <option> hyderbad </option>
              <option> banglore  </option>
              <option> chennai</option>
              <option> kerala</option>
              <option> chennai</option>
              <option> goa</option>
              <option> mumbai</option>
              <option> delhi</option>
           </select>
        </div>
        <br />
        

      </div>
    );
};

export default Editride;