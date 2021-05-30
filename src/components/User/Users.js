import React from 'react';
import Card from '../UI/Card';
import classes from './Users.module.css';

const Users = (props) => {
  return (
    <Card>
      <ul className={classes['users-detail']}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
