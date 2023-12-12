import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  //dopo che l'utente si è loggato salvo i suoi dati e JWT nella variabile user

  function handleLoginOrRegistration(resp) {
    setUser(resp.user);
    storeToken(resp.token);
  }
  function storeToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <>
      <AuthContext.Provider
        value={{ user, handleLoginOrRegistration, storeToken }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
