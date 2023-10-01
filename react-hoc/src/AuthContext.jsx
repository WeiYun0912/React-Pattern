import { createContext, useContext } from "react";

const auth = {
  isLogin: true,
};

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => (
  <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Error...");

  return context;
};

export default AuthContextProvider;
