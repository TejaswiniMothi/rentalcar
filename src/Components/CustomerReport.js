import React , { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 

const CustomerReport = () => {
    const [CustomerData, setCustomerData] = useState([]);
    const [error, setError] = useState(null);
  const custid = useRef();
    useEffect(() => {
      fetchDataFromUrl();
    }, []);

    
        const fetchDataFromUrl = async () => {
            try {
                const url = `https://localhost:7244/api/reportCustomer`;
                const response = await fetch(url);
          
                if (!response.ok) {
                  throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }
          
                const data = await response.json();
                setCustomerData(data.$values);
                console.log(data)
              } catch (error) {
                setError("Error fetching customer data from the server");
                console.error(error);
              }
            };
            return (
          
        <div>
                      {
        CustomerData.length >= 0 && (
<div className="row">
  <h1>Car Data</h1>
  <table border="1">
            <thead>
              <tr>
                <th>cname</th>
                <th>cid</th>
                <th>dob</th>
                <th>phnno</th>
                <th>address</th>

              </tr>
            </thead>
            <tbody>
              {CustomerData.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.cname}</td>
                  <td>{customer.cid}</td>
                  <td>{customer.dob}</td>
                  <td>{customer.phnno}</td>
                  <td>{customer.address}</td>

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

export default CustomerReport;