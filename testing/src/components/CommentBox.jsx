import React, { useState } from 'react';
import './CommentBox.css';

const CommentBox = ({ addComment }) => {
  const [value, setValue] = useState('test');

  return (
    <div className='container'>
      <h1>Enter a comment</h1>
      <p>value = {value} </p>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(value);
        }}>
        <textarea
          id='comment'
          value={value}
          onChange={(e) => setValue(e.target.value)}></textarea>
        <button type='submit' onSubmit={() => addComment(value)}>
          Post comment
        </button>
      </form>
    </div>
  );
};

export { CommentBox };
