import React from 'react';
import { Link } from 'react-router-dom';


const Reports = () => {
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
            <Link to={`/Bookedcarswithid`} className="btn btn-info"> Bookedcarswithid </Link>
            </td>

            <td>
            <Link to={`/Bookeddriverswithid`} className="btn btn-info"> Bookeddriverswithid </Link>
            </td>

            <td>
            <Link to={`/Unbookedcarswithid`} className="btn btn-info"> Unbookedcarswithid </Link>
            </td>

            <td>
            <Link to={`/Unbookeddriverswithid`} className="btn btn-info"> Unbookeddriverswithid </Link>
            </td>



   
        </div>
    );
};

export default Reports;