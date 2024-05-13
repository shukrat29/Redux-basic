import React from 'react';
import { useSelector } from 'react-redux';

const Display = ({ count }) => {
  const { count } = useSelector((state) => state.counterState);
  return (
    <>
      <div>{count}</div>
    </>
  );
};

export default Display;
