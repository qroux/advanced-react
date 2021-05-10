import React from 'react';

const CommentList = ({ comments }) => {
  const renderList = comments.map((comment) => {
    return <li key={comment}>{comment}</li>;
  });

  return (
    <div>
      <h3>Comments Section</h3>
      <ul>{renderList}</ul>
    </div>
  );
};

export { CommentList };
