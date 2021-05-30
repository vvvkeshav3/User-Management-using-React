import React from 'react';
import Card from '../UI/Card';
import NewUserForm from './NewUserForm';

const NewUser = (props) => {
  const onSubmitHandler = (userData) => {
    const data = {
      ...userData,
      id: Math.random().toString(),
    };
    props.onSave(data);
  };

  return (
    <Card>
      <NewUserForm
        onSubmit={onSubmitHandler}
        onInvalidData={props.onInvalidCredentials}
      />
    </Card>
  );
};

export default NewUser;
