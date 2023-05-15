import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [content, handleContentChange, setContent] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-input-form">
      <input
        type="text"
        placeholder="Add a comment..."
        value={content}
        onChange={handleContentChange}
        required
        className="comment-input"
      />
      <button type="submit" className="comment-submit-btn">Submit</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
