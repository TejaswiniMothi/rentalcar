import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Bookeddriverswithoutid = () => {
            const [driverData, setDriverData] = useState([]);
            const [error, setError] = useState(null);

            useEffect(() => {
              fetchDataFromUrl();
            }, []);

            const fetchDataFromUrl = async () => {
              try {
                const url = `https://localhost:7244/api/bookeddriverswithouttid`;
                const response = await fetch(url);

                if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setDriverData(data.$values);
      console.log(data);
    } catch (error) {
      setError("Error fetching drivers data from the server");
      console.error(error);
    }
  };

  return (
    <div>
      {driverData.length > 0 && (
        <div className="row">
          <h1>Driver Data</h1>
          <table border="1">
            <thead>
              <tr>
                <td>drivername</td>
                <td>driverid</td>
                <td>dob</td>
                <td>phoneno</td>
                <td>liscene</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {driverData.map((driver, index) => (
                <tr key={index}>
                  <td>{driver.drivername}</td>
                  <td>{driver.driverid}</td>
                  <td>{driver.dob}</td>
                  <td>{driver.phoneno}</td>
                  <td>{driver.liscene}</td>
                  <td>{driver.acions}</td>
                  <td>
                  <td><Link to ={`/Editride`}className="btn btn-info">
                      Editride</Link></td>
                      <td>
                    <td><Link to ={`/Deleteride`}className="btn btn-info">
                    Deleteride</Link></td>
                    <Link to={`/Bill?c=${driver.driverid}`} className="btn btn-info">
                      View bill
                    </Link>
                  </td>
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

export default Bookeddriverswithoutid;
