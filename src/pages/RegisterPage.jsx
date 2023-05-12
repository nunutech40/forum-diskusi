import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function Register() {
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  return (
    <section className="register-page">
      <article className="register-page__main">
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          {' '}
          <Link to="/login">Sign In</Link>
        </p>
      </article>
    </section>
  );
}

export default Register;
