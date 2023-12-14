import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Reportavailablecars = () => {
   
    const [carData, setCarData] = useState([]);
    const [error, setError] = useState(null);
  const custid = useRef();
    useEffect(() => {
      fetchDataFromUrl();
    }, []);
  
    const fetchDataFromUrl = async () => {
      try {
        const url = `https://localhost:7244/api/reportavailablecar`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setCarData(data.$values);
      console.log(data)
    } catch (error) {
      setError("Error fetching cars data from the server");
      console.error(error);
    }
  };
    return (
        <div>
             {
        carData.length >= 0 && (
<div className="row">
  <h1>Car Data</h1>
  <table border="1">
            <thead>
              <tr>
                <th>carname</th>
                <th>carno</th>
                <th>mileage</th>
                <th>color</th>
                <th>fuel</th>
                <th>cost</th>
                <th>capacity</th>
                <th>image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carData.map((car, index) => (
                <tr key={index}>
                  <td>{car.carname}</td>
                  <td>{car.carno}</td>
                  <td>{car.mileage}</td>
                  <td>{car.color}</td>
                  <td>{car.fuel}</td>
                  <td>{car.cost}</td>
                  <td>{car.capacity}</td>
                  <td>{car.image}</td>
                  <td>{car.action}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <p>{error}</p>} 
        </div>
    );
};

export default Reportavailablecars;