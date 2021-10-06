import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';

const BookPage = ({ history }) => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      const result = await axios(`https://jb-bookstore-server.herokuapp.com/books/${id}`);
      setBook(result.data);
    };
    getBook();
  }, [id]);

  const renderPage = () => {
    return (
      <Wrapper>
        <h1>
          <i>{book.title}</i>
        </h1>
        <h3>
          Author:{' '}
          <Link to={`/authors/${book.author._id}`}>{book.author.name}</Link>
        </h3>
        <h3>Published: {book.year}</h3>
        <button onClick={history.goBack}>Back</button>
        <Link to={`/books/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </Wrapper>
    );
  };

  const renderLoad = () => {
    return <p>..loading</p>;
  };

  return book ? renderPage() : renderLoad();
};

const Wrapper = styled.div`
  text-align: center;
`;

export default BookPage;
