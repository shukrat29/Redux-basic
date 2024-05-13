import React from 'react';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

const Button = ({ increase, decrease }) => {
  return (
    <>
      <PlusButton increase={increase}></PlusButton>
      <MinusButton decrease={decrease}></MinusButton>
    </>
  );
};

export default Button;
