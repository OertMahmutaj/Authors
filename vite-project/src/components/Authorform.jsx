import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authorform = ({ props }) => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [author, setAuthor ] = useState([]);

  const addAuthorToList = (newAuthor) => {
    setAuthor([...author, newAuthor]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError('Author name must be at least 3 characters long.');
      return; 
    }

    axios
      .post('http://localhost:8000/api/author/new', { name })
      .then((res) => {
        console.log(res.data);
        addAuthorToList(res.data);
        setName('');
        setError(''); 
        navigate('/author');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Name</label>
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Authorform;
