import { useState, ChangeEventHandler } from "react";

import Calculate from "./components/Calculate";
import Resuts from "./components/Resuts";

function App() {
  const [values, setValues] = useState({
    first: 0,
    second: 0,
  });
  const [operation, setOperation] = useState("add");

  const value1Handler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues((prev) => ({
      ...prev,
      first: +e.target.value,
    }));
  };

  const value2Handler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues((prev) => ({
      ...prev,
      second: +e.target.value,
    }));
  };
  const opertaionHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setOperation(e.target.value);
  };

  let result;
  if (operation === "add") {
    result = values.first + values.second;
  } else if (operation === "subtract") {
    result = values.first - values.second;
  } else if (operation === "multiply") {
    result = values.first * values.second;
  } else {
    result = values.first / values.second;
  }
  return (
    <div className="container">
      <h1>Simple Calculator</h1>
      <Calculate
        onOperationChange={opertaionHandler}
        onValue1Change={value1Handler}
        onValue2Change={value2Handler}
      />
      <Resuts results={result} />
    </div>
  );
}

export default App;
