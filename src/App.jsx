import { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Button from './Components/Button';

function App() {
  return (
    <>
      <h2>
        Redux play ground
        <hr />
        <Display count={count}></Display>
        <Button decrease={decrease} increase={increase}></Button>
      </h2>
    </>
  );
}

export default App;
