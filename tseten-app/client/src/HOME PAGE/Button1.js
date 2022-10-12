import React from 'react';
import Button from 'react-bootstrap/Button';

function Button1(props) {
  return (
    <>
      <Button variant="danger" href={props.Link}>{props.Title}</Button>{' '}
    </>
  );
}

export default Button1;