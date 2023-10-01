const withStyles = (Component) => {
  const HOC = (props) => (
    <>
      <h1 className="text-pink-500">Hello World</h1>
      <Component {...props} className="text-yellow-500" />
    </>
  );

  return HOC;
};

export default withStyles;
