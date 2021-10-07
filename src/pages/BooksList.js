import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const result = await axios(
        'https://jb-bookstore-server.herokuapp.com/books'
      );
      setBooks(result.data);
      setLoaded(true);
    };
    getBooks();
  }, []);

  const deleteBook = async id => {
    try {
      await axios.delete(
        `https://jb-bookstore-server.herokuapp.com/books/${id}`
      );
      setBooks(books.filter(book => book._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const searchBooks = query => {
    fetch('https://jb-bookstore-server.herokuapp.com/books')
      .then(res => res.json())
      .then(data =>
        data.filter(
          book =>
            book.title.toUpperCase().includes(query.toUpperCase()) ||
            book.year.toString().includes(query) ||
            book.author.name.toUpperCase().includes(query.toUpperCase())
        )
      )
      .then(bookData => setBooks(bookData))
      .catch(err => console.log(err));
  };

  const renderPage = () => {
    return (
      <Wrapper>
        <h1>Books List</h1>
        <SearchBar handleSubmit={searchBooks} />
        <ListWrapper>
          <ul>
            {books.map(book => {
              return (
                <ListItem key={book._id}>
                  <div>
                    <Link to={`/books/${book._id}`}>
                      <i>{book.title}</i> by {book.author.name} ({book.year})
                    </Link>
                  </div>
                  <div>
                    <Link to={`/books/${book._id}/edit`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => deleteBook(book._id)}>Delete</button>
                  </div>
                </ListItem>
              );
            })}
          </ul>
        </ListWrapper>
        <Link to={'/books/new'}>
          <button>Create New Book</button>
        </Link>
        <br />
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/authors'>
          <button>Authors List</button>
        </Link>
      </Wrapper>
    );
  };

  const renderLoad = () => {
    return <h3>Loading...</h3>;
  };

  return loaded ? renderPage() : renderLoad();
};

const Wrapper = styled.div`
  text-align: center;
`;

const ListWrapper = styled.div`
  margin: 0 auto;
  width: 600px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default BooksList;
