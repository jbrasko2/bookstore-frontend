import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import styled from 'styled-components';

const AuthorEdit = ({ history }) => {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAuthor = async () => {
      const result = await axios(`http://localhost:3000/authors/${id}`);
      setAuthor(result.data);
    };
    getAuthor();
  }, [id]);

  const submitEdit = async ({ name, dob }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/Authors/${id}`,
        {
          name,
          dob,
        }
      );
      console.log('Returned Data:', response);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const renderPage = () => {
    return (
      <Wrapper>
        <h1>Edit {author.name}</h1>
        <AuthorForm handleSubmit={submitEdit} author={author} />
        <br />
        <button onClick={history.goBack}>Back</button>
      </Wrapper>
    );
  };

  const renderLoad = () => {
    return <p>..loading</p>;
  };

  return author ? renderPage() : renderLoad();
};

const Wrapper = styled.div`
  text-align: center;
`;

export default AuthorEdit;
