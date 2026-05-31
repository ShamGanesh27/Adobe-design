import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame/PhoneFrame';
import FloatingInput from '../components/FloatingInput/FloatingInput';
import Button from '../components/Button/Button';
import './Signup.css';

/**
 * Signup Page
 * "Create your PopX account" with form fields:
 * Full Name, Phone number, Email address, Password, Company name
 * plus an "Are you an Agency?" radio group.
 * The Create Account button is at the very bottom.
 */
function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    company: 'Marry Doe',
    isAgency: 'yes',
  });

  // Generic handler for text inputs
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Handler for radio buttons
  const handleAgencyChange = (value) => {
    setFormData((prev) => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to profile on signup
    navigate('/profile');
  };

  return (
    <PhoneFrame>
      <div className="signup" id="signup-page">
        <div className="signup__content">
          {/* Header */}
          <h1 className="signup__title" id="signup-title">
            Create your
            <br />
            PopX account
          </h1>

          {/* Form */}
          <form className="signup__form" onSubmit={handleSubmit}>
            <FloatingInput
              label="Full Name"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange('fullName')}
              required
              id="signup-fullname"
            />

            <FloatingInput
              label="Phone number"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange('phone')}
              required
              id="signup-phone"
            />

            <FloatingInput
              label="Email address"
              type="text"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange('email')}
              required
              id="signup-email"
            />

            <FloatingInput
              label="Password "
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange('password')}
              required
              id="signup-password"
            />

            <FloatingInput
              label="Company name"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange('company')}
              id="signup-company"
            />

            {/* Agency Radio Group */}
            <div className="signup__radio-group" id="signup-agency-group">
              <span className="signup__radio-label">
                Are you an Agency?<span className="signup__required">*</span>
              </span>
              <div className="signup__radio-options">
                <label className="signup__radio" id="radio-yes">
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => handleAgencyChange('yes')}
                  />
                  <span className="signup__radio-custom" />
                  <span className="signup__radio-text">Yes</span>
                </label>
                <label className="signup__radio" id="radio-no">
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === 'no'}
                    onChange={() => handleAgencyChange('no')}
                  />
                  <span className="signup__radio-custom" />
                  <span className="signup__radio-text">No</span>
                </label>
              </div>
            </div>

            {/* Spacer pushes button to bottom */}
            <div className="signup__spacer" />

            <Button
              variant="primary"
              type="submit"
              id="btn-create-account-submit"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default Signup;
