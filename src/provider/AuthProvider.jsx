import { useState } from "react";
import { AuthContext } from "../Context";
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const state = {
    auth,
    setAuth,
  };
  return (
    <>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </>
  );
};
export default AuthProvider;
