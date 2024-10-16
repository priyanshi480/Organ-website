import React from 'react';
import './LoginModal.css'; // Include your CSS for styling

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
