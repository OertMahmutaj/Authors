import React, { useState } from 'react';
import Authorform from '../components/Authorform';
import AuthorsList from '../components/AuthorsList';
import { Link } from 'react-router-dom';

const Main = (props) => {
  const [author, setAuthor] = useState([]);

  const removeFromDom = (authorId) => {
    setAuthor(author.filter((a) => a._id !== authorId));
  };

  return (
    <div>
      {/* <Link to={`/author/new`}></Link>
      <Authorform author={author} setAuthor={setAuthor} addAuthorToList={addAuthorToList} />
      <hr /> */}
      <Link to={`/author/new`}>Add Author</Link>
      <AuthorsList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
