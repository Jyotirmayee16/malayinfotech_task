import React, { useState } from 'react';


const API_URL = "http://uatbenmoon.malayinfotech.com/api/memberapi/";

function Registration() {
  const initialFormData = {
    registrationType: 'Individual',
    title: 'Mr',
    name: '',
    fatherHusbandTitle: 'S/O',
    fatherHusbandName: '',
    birthDate: '',
    address: '',
    pinCode: '',
    mobileNo: '',
    email: '',
    panNumber: '',
    aadharNumber: '',
    nomineeName: '',
    nomineeRelation: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Registration successful');
        } else {
          console.error('API request failed');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Registration Type:
            <select name="registrationType" value={formData.registrationType} onChange={handleChange}>
              <option value="Individual">Individual</option>
              <option value="Organization">Organization</option>
            </select>
          </label>
        </div>
        <div>
          <label>Title:
            <select name="title" value={formData.title} onChange={handleChange}>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
            </select>
          </label>
        </div>
        <div>
          <label>Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} maxLength="60" />
            {formErrors.name && <div className="error">{formErrors.name}</div>}
          </label>
        </div>
        <div>
          <label>Father / Husband Title:
            <select name="fatherHusbandTitle" value={formData.fatherHusbandTitle} onChange={handleChange}>
              <option value="S/O">S/O</option>
              <option value="D/O">D/O</option>
              <option value="W/O">W/O</option>
            </select>
          </label>
        </div>
        <div>
          <label>Father / Husband Name:
            <input type="text" name="fatherHusbandName" value={formData.fatherHusbandName} onChange={handleChange} maxLength="60" />
          </label>
        </div>
        <div>
          <label>Birth Date:
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Address:
            <textarea name="address" value={formData.address} onChange={handleChange} maxLength="250" />
          </label>
        </div>
        <div>
          <label>PIN Code:
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} maxLength="10" />
          </label>
        </div>
        <div>
          <label>Mobile No:
            <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} maxLength="10" />
            {formErrors.mobileNo && <div className="error">{formErrors.mobileNo}</div>}
          </label>
        </div>
        <div>
          <label>Email ID:
            <input type="email" name="email" value={formData.email} onChange={handleChange} maxLength="100" />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
          </label>
        </div>
        <div>
          <label>PAN Number:
            <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} maxLength="10" />
            {formErrors.panNumber && <div className="error">{formErrors.panNumber}</div>}
          </label>
        </div>
        <div>
          <label>Aadhar Number:
            <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} maxLength="12" />
          </label>
        </div>
        <div>
          <label>Nominee Name:
            <input type="text" name="nomineeName" value={formData.nomineeName} onChange={handleChange} maxLength="50" />
          </label>
        </div>
        <div>
          <label>Nominee Relation:
            <input type="text" name="nomineeRelation" value={formData.nomineeRelation} onChange={handleChange} maxLength="50" />
          </label>
        </div>
        <div>
          <label>Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} maxLength="15" />
          </label>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}




export default Registration;
