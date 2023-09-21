import React from "react";

interface Props {
  render: () => React.ReactNode;
}

const App = () => {
  return (
    <div>
      <Title render={() => <h1>Hello</h1>} />

      <Title render={() => <h1>World</h1>} />
    </div>
  );
};

const Title = (props: Props) => props.render();
export default App;
