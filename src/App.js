import "./App.css";
import { useState } from "react";

const AddOn = ({ name, age, job }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{job}</h3>
    </div>
  );
};
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container text-center">
      <h1>Hey {count}</h1>
      <button className="btn btn-primary " onClick={handleClick}>
        Click Me
      </button>
      <AddOn name="Fares" age={28} job="Computer Engineer" />
      <AddOn name="Nawaf" age={30} job="Electrical Engineer" />
    </div>
  );
}

export default App;
