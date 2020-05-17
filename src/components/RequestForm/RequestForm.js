import React, { useState } from 'react';
import { makeRequest } from '../../services/makeRequest';
import { useDispatch } from 'react-redux';
import { addRequest } from '../../actions/requestActions';

const RequestForm = () => {
  const dispatch = useDispatch();

  const [url, setURL] = useState('');
  const [body, setBody] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addRequest({ url, body, method }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={({ target }) => setURL(target.value)} placeholder="Enter URL" />
      <RadioButtons handleChange={handleChange} />
      <textarea value={body} onChange={({ target }) => setBody(target.value)} placeholder="Body"></textarea>
      <button>Create Habit</button>
    </form>
  );
};


export default RequestForm;