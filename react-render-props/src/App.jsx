import { useState } from "react";
import "./App.css";

// render props pattern

function App() {
  return (
    <>
      <Input>
        {(name) => (
          <>
            <ReadName name={name} />
            <Greet name={name} />
          </>
        )}
      </Input>
    </>
  );
}

const Input = (props) => {
  const [name, setName] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {props.children(name)}
    </>
  );
};

const ReadName = ({ name }) => {
  return <h1>{name}</h1>;
};

const Greet = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

export default App;
