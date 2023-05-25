import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bootcamp: '',
    birthdate: '',
    birthplace: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {step === 1 && (
          <div>
            <h1 className="form-title">Multi-Step Form</h1>
            <h2 className="step-title">Step 1</h2>
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">Bootcamp:</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="bootcamp"
                    value="UI/UX"
                    checked={formData.bootcamp === 'UI/UX'}
                    onChange={handleChange}
                    required
                  />
                  UI/UX
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="bootcamp"
                    value="Backend Engineer"
                    checked={formData.bootcamp === 'Backend Engineer'}
                    onChange={handleChange}
                    required
                  />
                  Backend Engineer
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="bootcamp"
                    value="Frontend Engineer"
                    checked={formData.bootcamp === 'Frontend Engineer'}
                    onChange={handleChange}
                    required
                  />
                  Frontend Engineer
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="bootcamp"
                    value="Digital Marketing"
                    checked={formData.bootcamp === 'Digital Marketing'}
                    onChange={handleChange}
                    required
                  />
                  Digital Marketing
                </label>
              </div>
              <br />
              <button type="submit" className="form-button">Next</button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="form-title">Multi-Step Form</h1>
            <h2 className="step-title">Step 2</h2>
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                Birthdate:
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Birthplace:
                <input
                  type="text"
                  name="birthplace"
                  value={formData.birthplace}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Address:
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="form-input"
                ></textarea>
              </label>
              <br />
              <button type="submit" className="form-button">Next</button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="form-title">Multi-Step Form</h1>
            <h2 className="step-title">Step 3</h2>
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="form-title">Selamat Datang</h1>
            <p className="welcome-message">Thank you for submitting the form, {formData.name}!</p>
            <p className="form-result">Email: {formData.email}</p>
            <p className="form-result">Phone: {formData.phone}</p>
            <p className="form-result">Bootcamp: {formData.bootcamp}</p>
            <p className="form-result">Birthplace: {formData.birthplace}</p>
            <p className="form-result">Address: {formData.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
