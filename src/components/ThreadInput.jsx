import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, handleTitleChange, setTitle] = useInput('');
  const [body, handleBodyChange, setBody] = useInput('');
  const [category, handleCategoryChange, setCategory] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addThread(title, body, category);
    setTitle('');
    setBody('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="thread-input-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
        className="thread-input"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={handleBodyChange}
        required
        className="thread-textarea"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleCategoryChange}
        required
        className="thread-input"
      />
      <button type="submit" className="thread-submit-btn">Submit</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
