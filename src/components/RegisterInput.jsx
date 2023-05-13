import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <div className="input-group">
        <FaUser className="icon" />
        <input type="text" value={name} onChange={onNameChange} placeholder="Full Name" />
      </div>
      <div className="input-group">
        <FaEnvelope className="icon" />
        <input type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      </div>
      <div className="input-group">
        <FaLock className="icon" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      </div>
      <button type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
