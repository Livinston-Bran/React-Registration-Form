import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
  };

  const validateInputs = () => {
    const { username, email, password, cpassword } = formData;
    const newErrors = {};

    if (username.trim() === '') {
      newErrors.username = 'Username is Required';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is Required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please Enter Valid Email';
    }

    if (password.trim() === '') {
      newErrors.password = 'Password is Required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (cpassword.trim() === '') {
      newErrors.cpassword = 'Confirmed Password is Required';
    } else if (cpassword !== password) {
      newErrors.cpassword = 'Passwords Do Not Match';
    }

    setFormErrors(newErrors);
  };

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
        <h1>Register</h1>
        <div className={`input-group ${formErrors.username ? 'error' : ''}`}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error">{formErrors.username}</div>
        </div>
        <div className={`input-group ${formErrors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{formErrors.email}</div>
        </div>
        <div className={`input-group ${formErrors.password ? 'error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{formErrors.password}</div>
        </div>
        <div className={`input-group ${formErrors.cpassword ? 'error' : ''}`}>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
          />
          <div className="error">{formErrors.cpassword}</div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
