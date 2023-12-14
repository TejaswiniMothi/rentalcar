import React, { useRef, useState } from 'react';

const Bill = () => {
  const startdate = useRef(null);
  const enddate = useRef(null);
  const pickuplocation = useRef(null);
  const droplocation = useRef(null);
  const carno = useRef(null);
  const cost = useRef(null);
  const paymenttype = useRef(null);
  const license = useRef(null);

  const [selectedPickupLocation, setSelectedPickupLocation] = useState('');
  const [selectedDropLocation, setSelectedDropLocation] = useState('');

  const handlePickupLocationChange = (event) => {
    setSelectedPickupLocation(event.target.value);
  };

  const handleDropLocationChange = (event) => {
    setSelectedDropLocation(event.target.value);
  };

  const billgen = () => {
    var jsonData = {
      "startdate": startdate.current.value,
      "enddate": enddate.current.value,
      "pickuplocation": selectedPickupLocation,
      "droplocation": selectedDropLocation,
      "carno": carno.current.value,
      "cost": cost.current.value,
      "paymenttype": paymenttype.current.value,
      "license": license.current.value
    };

    console.log(jsonData);
  };

  return (
    <div>
      <h2>Your bill details are as follows</h2>
      <div>
        <label>Enter start date:</label>&nbsp;
        <input type="date" ref={startdate} className="form-control" />
      </div>

      <div>
        <label>Enter end date:</label>&nbsp;
        <input type="date" ref={enddate} className="form-control" />
      </div>
      <br />
      <div>
        <label>Enter pickup location:</label>&nbsp;
        <select value={selectedPickupLocation} onChange={handlePickupLocationChange}>
          <option value="hyderabad">Hyderabad</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
          <option value="kerala">Kerala</option>
          <option value="goa">Goa</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
        </select>
      </div>

      <div>
        <label>Enter drop location:</label>&nbsp;
        <select value={selectedDropLocation} onChange={handleDropLocationChange}>
          <option value="hyderabad">Hyderabad</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
          <option value="kerala">Kerala</option>
          <option value="goa">Goa</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
        </select>
      </div>
      <br />
      <div>
        <label>Enter car number:</label>&nbsp;
        <input type="text" ref={carno} className="form-control" />
      </div>
      <br />
      <div>
        <label>Enter cost:</label>&nbsp;
        <input type="text" ref={cost} className="form-control" />
      </div>
      <br />
      <div>
        <label>Enter payment type:</label>&nbsp;
        <input type="text" ref={paymenttype} className="form-control" />
      </div>
      <br />
      <div>
        <label>Enter license:</label>&nbsp;
        <input type="text" ref={license} className="form-control" />
      </div>
      <br />
      <br />
      <input
        type="button"
        value="Submit"
        onClick={billgen}
        className="btn btn-info"
        style={{ backgroundColor: 'skyblue', borderRadius: '10px', padding: '10px 20px' }}
      />
    </div>
  );
};

export default Bill;
