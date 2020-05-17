import React from 'react';
import PropTypes from 'prop-types';
// import styles from '.css';

const RadioButtons = ({ handleChange }) => (
  <>
    <label>
        <input type="radio" name="method" value="GET" onChange={handleChange} />GET
    </label>
      <label>
          <input type="radio" name="method" value="POST" onChange={handleChange}/>POST
    </label>
      <label>
          <input type="radio" name="method" value="PUT" onChange={handleChange}/>PUT
    </label>
      <label>
          <input type="radio" name="method" value="PATCH" onChange={handleChange}/>PATCH
        </label>
      <label>
          <input type="radio" name="method" value="DELETE" onChange={handleChange}/>DELETE
        </label>
  </>
); 

RadioButtons.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default RadioButtons;
