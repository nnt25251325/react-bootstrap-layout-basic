import React from 'react';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <div className="p-home">
      <div className="title-page">
        <Container>
          <h1>Home</h1>
        </Container>
      </div>

      <img
        src="https://loremflickr.com/1920/500"
        alt="Demo"
        className="w-100"
      />
    </div>
  );
};
