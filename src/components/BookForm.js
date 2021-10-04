import React, { useState } from 'react';
import styled from 'styled-components';

const BookForm = ({ handleSubmit, book }) => {
  const [title, setTitle] = useState(book ? book.title : null);
  const [authorName, setAuthorName] = useState(book ? book.author.name : null);
  const [year, setYear] = useState(book ? book.year : null);

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit({ title, authorName, year });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            name='title'
            autoComplete='off'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='authorName'>Author: </label>
          <input
            type='text'
            id='authorName'
            name='authorName'
            autoComplete='off'
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='year'>Year: </label>
          <input
            type='text'
            id='year'
            name='year'
            autoComplete='off'
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </InputWrapper>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export default BookForm;
