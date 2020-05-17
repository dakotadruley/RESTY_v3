import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Request.css';

// eslint-disable-next-line react/prop-types
const RadioButton = () => (
  <>
    <label>
        <input type="radio" name="method" value="value" onChange={handleChange}/>
    </label>
  </>
);

const RadioButtons = ({ url, onChange, body, onSubmit }) => (
  <>
    <input type="text" name="url" value={url} onChange={onChange}/>
    
      <RadioButton value="POST" />
      <RadioButton value="GET" />
      <RadioButton value="PATCH" />
      <RadioButton value="PUT" />
      <RadioButton value="DELETE" />
    
  </>

RadioButtons.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default RadioButtons;
