import React from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import styled from 'styled-components';

const AuthorNew = ({ history }) => {
  const submitNew = async ({ name, dob }) => {
    try {
      const response = await axios.post(`https://jb-bookstore-server.herokuapp.com/authors`, {
        name,
        dob,
      });
      console.log('Returned Data:', response);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <h1>Create New Author</h1>
      <AuthorForm handleSubmit={submitNew} />
      <br />
      <button onClick={history.goBack}>Back</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

export default AuthorNew;
