import React from 'react';
import { Link } from 'react-router-dom';


const HomeAdmin = () => {
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
        <div>
            <td>
            <Link to={`/Bookedcarswitoutid`} className="btn btn-info"> bookedcarswithoutid </Link>
            </td>

            <td>
            <Link to={`/Bookeddriverswithoutid`} className="btn btn-info"> bookeddriverswithoutid </Link>
            </td>

            <td>
            <Link to={`/Unbookedcarswithoutid`} className="btn btn-info"> Unbookedcarswithoutid </Link>
            </td>

            <td>
            <Link to={`/Unbookeddriverswithoutid`} className="btn btn-info"> Unbookeddriverswithoutid </Link>
            </td>

            <td>
            <Link to={`/Addcar`} className="btn btn-info"> Addcar </Link>
            </td>



            <td>
            <Link to={`/Adddriver`} className="btn btn-info"> Adddriver </Link>
            </td>



            <td>
            <Link to={`/Reportallcars`} className="btn btn-info"> Reportallcars </Link>
            </td>

            
            <td>
            <Link to={`/Reportalldrivers`} className="btn btn-info"> Reportalldrivers </Link>
            </td>



            
        </div>
    );
};

export default HomeAdmin;