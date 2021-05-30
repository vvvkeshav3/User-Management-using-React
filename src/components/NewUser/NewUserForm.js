import React, { useRef } from 'react';
import classes from './NewUserForm.module.css';
import Button from '../UI/Button';
const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;
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

    // Here we are modifying the ref (edge case)
    // But We should not modify the ref(i.e. real DOM without using React)
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          className={classes.input}
          ref={nameInputRef}
        />
      </div>
      <div className={classes['input-div']}>
        <label htmlFor="age" className={classes.label}>
          Age (Years)
        </label>
        <input
          type="number"
          id="age"
          className={classes.input}
          ref={ageInputRef}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default NewUserForm;
