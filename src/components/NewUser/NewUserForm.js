import React, { useState } from 'react';
import classes from './NewUserForm.module.css';
import Button from '../UI/Button';
const NewUserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      props.onInvalidData(
        'Invalid Input',
        'Please enter a valid name and age (non-empty-values)'
      );
    } else if (parseInt(age) <= 0) {
      props.onInvalidData('Invalid Age', 'Please enter a valid age (>0)');
    } else {
      const data = {
        username: username,
        age: parseInt(age),
      };
      props.onSubmit(data);
    }
    event.target.blur();
    setUsername('');
    setAge('');
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes['input-div']}>
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={usernameHandler}
          value={username}
          className={classes.input}
        />
      </div>
      <div className={classes['input-div']}>
        <label htmlFor="age" className={classes.label}>
          Age (Years)
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={ageHandler}
          className={classes.input}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default NewUserForm;
