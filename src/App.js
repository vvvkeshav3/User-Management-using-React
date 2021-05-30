import React, { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import Users from './components/User/Users';
import ErrorModal from './components/UI/ErrorModal';
import Wrapper from './components/Helpers/Wrapper';
const App = () => {
  const [usersData, setUsersData] = useState([]);

  const [isError, setIsError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSaveHandler = (data) => {
    setIsError(false);
    setUsersData((prevData) => [data, ...prevData]);
  };

  const onInvalidCredentialsHandler = (eTitle, eMessage) => {
    setIsError(true);
    setErrorTitle(eTitle);
    setErrorMessage(eMessage);
  };

  const onCancelErrorHandler = () => {
    setIsError(false);
  };

  return (
    <Wrapper>
      {isError && (
        <ErrorModal
          title={errorTitle}
          message={errorMessage}
          onCancelError={onCancelErrorHandler}
        />
      )}

      <NewUser
        onSave={onSaveHandler}
        onInvalidCredentials={onInvalidCredentialsHandler}
      />
      {usersData.length > 0 && <Users users={usersData} />}
    </Wrapper>
  );
};

export default App;
