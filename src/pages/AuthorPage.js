import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AuthorPage = ({ history }) => {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAuthor = async () => {
      const result = await axios(`http://localhost:3000/authors/${id}`);
      setAuthor(result.data);
    };
    getAuthor();
  }, [id]);

  const renderPage = () => {
    return (
      <Wrapper>
        <h1>{author.name}</h1>
        <h3>Date of Birth: {author.dob.split('T')[0]}</h3>
        <h4 style={{ marginBottom: '-12px' }}>Books</h4>
        <ListWrapper>
          <ul>
            {author.books.map(book => {
              return (
                <li key={book._id}>
                  <Link to={'/books/' + book._id}>
                    <i>{book.title}</i> ({book.year})
                  </Link>
                </li>
              );
            })}
          </ul>
        </ListWrapper>
        <button onClick={history.goBack}>Back</button>
        <Link to={`/authors/${id}/edit`}>
          <button>Edit</button>
        </Link>
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

const ListWrapper = styled.div`
  margin-right: 32px;
`;

export default AuthorPage;
