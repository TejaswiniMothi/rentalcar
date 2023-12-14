import React from 'react';
import { Link } from 'react-router-dom';

const Createride = () => {
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
            <input type="date" className="form-control" />
          </label>
        </div>
  
        <div>
          <label>Enter drop date:</label>&nbsp;
          <label>
            <input type="date" className="form-control" />
          </label>
        </div>
        <br />
        <div>
          <label>Enter pickup time:</label>&nbsp;
          <label>
            <input type="time" className="form-control" />
          </label>
        </div>
  
        <div>
          <label>Enter drop time:</label>&nbsp;
          <label>
            <input type="time" className="form-control" />
          </label>
        </div>
        <br />
        <div>
          <label>Enter pickup location:</label>&nbsp;
           <select>
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
           <select>
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

export default Createride;