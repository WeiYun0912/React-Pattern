import React from "react";
type Props = {
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const Test1 = ({ setText }: Props) => {
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default Test1;
