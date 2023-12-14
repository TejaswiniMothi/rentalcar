import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CustomerMaster = () => {
  const ob = useNavigate();
  const navigate = useNavigate();

  function NoMethod() {
    const [data] = document.forms['myform'];
    ob({
      pathname: '/Search',
      search: '?fname=' + data.value,
    });
  }

  const userRole = sessionStorage.getItem('userRole');
  const isUserLoggedIn = sessionStorage.getItem('usid') !== null;

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/HomeCustomer" className="navbar-brand">
              Home
            </Link>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to="/Bookedcarswithid" className="nav-item nav-link">
                  Reservations
                </Link>
                <Link to="/Blogs" className="nav-item nav-link">
                  Blogs
                </Link>
                <Link to="/ContactUs" className="nav-item nav-link">
                  ContactUs
                </Link>
                <Link to="/AboutUs" className="nav-item nav-link">
                AboutUs
                </Link>
                <Link to="/Reports" className="nav-item nav-link">
                Reports
                </Link>
                
              </div>

                <div className="navbar-nav">
                  {sessionStorage.getItem('usid') == null ? (
                    <li>
                      <Link className="nav-item nav-link" to="/Login">
                        Login
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link className="nav-item nav-link" to="/Logout">
                        Logout
                      </Link>
                    </li>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerMaster;
