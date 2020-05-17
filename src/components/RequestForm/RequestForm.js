import React, { useState } from 'react';
// import { makeRequest } from '../../services/makeRequest';
import { useDispatch } from 'react-redux';
import { addRequest } from '../../actions/requestActions';
import RadioButtons from './RadioButtons.js';

const RequestForm = () => {
  const dispatch = useDispatch();

  const [url, setURL] = useState('');
  const [body, setBody] = useState('');
  const [method, setMethod] = useState('GET');

  const handleChange = ({ target }) => {
    if(target.value === 'url')setURL(target.value);
    if(target.value === 'method')setMethod(target.value);
    if(target.value === 'body')setBody(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addRequest({ url, body, method }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={({ target }) => setURL(target.value)} placeholder="Enter URL" />
      <RadioButtons handleChange={handleChange} />
      <textarea value={body} onChange={({ target }) => setBody(target.value)} placeholder="Body"></textarea>
      <button>Go!</button>
    </form>
  );
};

export default RequestForm;