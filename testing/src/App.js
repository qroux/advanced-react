import './App.css';
import { useState } from 'react';

import { CommentBox } from './components/CommentBox';
import { CommentList } from './components/CommentList';

function App() {
  const [comments, setComments] = useState(['first !']);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className='App page-container'>
      <CommentBox addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
