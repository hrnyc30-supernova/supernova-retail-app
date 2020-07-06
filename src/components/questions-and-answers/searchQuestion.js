import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SearchQuestion = (props) => {
  return (
    <Form.Group controlId="search">
      <Form.Control
        type="search"
        name="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        maxLength={60}
      />
    </Form.Group>
  );
};

export default SearchQuestion;
