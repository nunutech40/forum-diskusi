import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body: category }));
    navigate('/');
  };

  return (
    <section className="add-thread-page">
      <ThreadInput addThread={addThread} />
    </section>
  );
}

export default AddThreadPage;
