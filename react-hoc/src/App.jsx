import "./App.css";
import AuthContextProvider from "./AuthContext";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Dashboard />
        <Profile />
      </AuthContextProvider>
    </>
  );
}

export default App;
