import { useAuthContext } from "./AuthContext";

const withAuth = (Component) => {
  const HOC = (props) => {
    const { auth } = useAuthContext();

    if (!auth.isLogin) return <h1>Not Login</h1>;

    return <Component {...props} />;
  };

  return HOC;
};

export default withAuth;
