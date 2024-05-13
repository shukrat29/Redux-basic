import React from 'react';

const PlusButton = ({ increase }) => {
  return (
    <>
      <button onClick={increase}>+</button>{' '}
    </>
  );
};

export default PlusButton;
