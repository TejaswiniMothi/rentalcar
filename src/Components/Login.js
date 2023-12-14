import React, { useRef, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const usid = useRef(null);
  const pwd = useRef(null);
  const [userType, setUserType] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [message, setmessage] = useState(null);
  var url='';
  var jsonData = "";
  const navigate = useNavigate();
  const handleTabClick = (tabType) => {
    setUserType(tabType);
    setSelectedTab(tabType);
  };

  const handleLogin = async () => {
    try{
    switch (userType) {
        case 'admin':
          url = 'Adminlogin';
          jsonData = {
            "Adminid": usid.current.value,
            "Pwd": pwd.current.value
          };
          setSelectedTab("admin")
          break;
        case 'customer':
          url = 'Customerlogin';
          jsonData = {
            "Userid": usid.current.value,
            "Pwd": pwd.current.value
          };
          setSelectedTab("customer")
          break;
          default:
            setmessage('Invalid user type');
            return;
        }

      const response = await fetch(`https://localhost:7244/api/${url}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        const userdata = await response.json();
 
        if (userdata === 1) {
          console.log(userdata)
          switch (userType) {
            case 'customer':
              navigate('/HomeCustomer');
              sessionStorage.setItem('layout', 'Customer');
              break;
            case 'admin':
              navigate('/HomeAdmin');
              sessionStorage.setItem('layout', 'Admin');
              break;

            default:
              navigate('/Login');
              return;
          }
        } else {
        setmessage("Invalid credentials or user doesnot exist");
 
        }
      } else {
       
        setmessage('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const styles = {
    homeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    formBox: {
      border: '1px solid #ccc',
      padding: '20px',
      marginTop: '20px',
      marginBottom: '20px',
      borderRadius: '15px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      width: '540px',
    },
    label: {
      textShadow: '3px 2px 2px #ecf5fd',
      color: '#333',
      fontSize: 'larger',
      fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", "Arial", "sans-serif"',
    },
    tabContainer: {
      display: 'flex',
      marginBottom: '10px',
      width:'425px',
    },
    tab: {
      border: '1px solid black',
      borderRadius: '10px',
      padding: '8px',
      paddingTop: '1px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: userType === selectedTab ? 'blue' : 'red',
       color: 'black',
       textAlign: 'center',
    },
 
 
    hiddenradio:{
      opacity:0
    },
   
    button: {
      backgroundColor: 'blue',
      color: '#fff', 
      fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", "Arial", "sans-serif"',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '6px',
      marginBottom:'6px',
      width:'100px',
 
    },}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>LOGIN</h1>
      <div
                  style={{
                    ...styles.tab,
                    backgroundColor:
                      userType === 'customer' ? 'red' : 'blue',
                  }}
                  onClick={() => handleTabClick('customer')}
                >
                   customer
                </div>
 
                <div
                  style={{
                    ...styles.tab,
                    backgroundColor:
                      userType === 'admin' ? 'red' : 'blue',
                  }}
                  onClick={() => handleTabClick('admin')}
                >
                admin
                </div>
      <form>
        <label> Enter usid </label>&nbsp;&nbsp;
        <input type="text" className='form-control' ref={usid}></input>
        <br />
        <label> Enter pwd </label>&nbsp;&nbsp;
        <input type="password" className='form-control' ref={pwd}></input>
        <br />
      </form>
      <br />
      <button onClick={handleLogin} className="btn btn-info" style={{ backgroundColor: 'skyblue', borderRadius: '10px', padding: '10px 20px' }}>
        Login
      </button>
      <label>{message}</label>
    </div>
  );
};

export default Login;
