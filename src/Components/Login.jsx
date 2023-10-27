import React, { useState } from 'react';

const API_LOGIN_URL = "http://uatbenmoon.malayinfotech.com/api/memberlogin/";

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({ loginName: '', loginPwd: '' });
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Implement the API request for login
      const response = await fakeAPICall(loginData);

      if (response && response.success) {
        onLogin(response.memberDetails);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login: ', error);
      setError('An error occurred during login. Please try again later.');
    }
  };

  const fakeAPICall = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.loginName === 'B1122334455' && data.loginPwd === 'b@123') {
          resolve({
            success: true,
            memberDetails: {
              MemberName: 'John Doe',
              MemberAddress: '123 Main St',
              MemberCityName: 'Cityville',
              MemberPINCode: '12345',
              MobileNo: '123-456-7890',
              EmailID: 'john@example.com',
              MemberPANNo: 'ABCDE1234F',
              BirthDate: '1990-01-01',
            },
          });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError('');
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form>
        <div>
          <label>
            Login ID:
            <input
              type="text"
              name="loginName"
              value={loginData.loginName}
              onChange={handleInputChange}
              maxLength="20"
              pattern="[A-Za-z0-9]{1,20}"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="loginPwd"
              value={loginData.loginPwd}
              onChange={handleInputChange}
              maxLength="15"
              pattern="^[A-Za-z0-9!@#$%^&*()_+}{:;'\[\]]{1,15}"
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
