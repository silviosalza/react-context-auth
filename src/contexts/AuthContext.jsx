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

  //recupero utente attuale tramite una chiamata API
  async function fetchLoggedUser() {
    const user = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Filippo",
          surname: "Salza",
          email: "filipposalza@gmail.it",
        });
      }, 2000);
    });

    setUser(user);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    //se c'è token memorizzato nel localstorage lo salvo e lo uso per recuperare i dati dell'utente
    if (token) {
      setToken(token);
      fetchLoggedUser();
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
