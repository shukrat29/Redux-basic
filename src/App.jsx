import { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

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
