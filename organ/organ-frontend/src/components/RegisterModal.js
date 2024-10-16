import React from 'react';
import './RegisterModal.css'; // Include your CSS for styling

const RegisterModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Register</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
