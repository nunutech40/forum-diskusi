import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <div className="input-group">
        <FaEnvelope className="icon" />
        <input type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      </div>
      <div className="input-group">
        <FaLock className="icon" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      </div>
      <button type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
