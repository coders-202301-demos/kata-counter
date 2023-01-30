import "./App.css";
import { useState } from "react";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";

const App = (): JSX.Element => {
  let [number, setNumber] = useState(1);

  const decrease = () => {
    if (number === 0) {
      return;
    }

    setNumber(number - 1);
  };

  const increase = () => {
    if (number === 10) {
      return;
    }

    setNumber(number + 1);
  };

  return (
    <div className="container">
      <Button text="-" action={decrease} />
      <Display text={`${number}`} />
      <Button text="+" action={increase} />
    </div>
  );
};

export default App;
