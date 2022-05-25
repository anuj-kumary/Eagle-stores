import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupServices } from '../../services/Services';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localStorageToken = JSON.parse(localStorage.getItem('login'));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localStorageUser?.user);

  useEffect(() => {
    const fetchToken = JSON.parse(localStorage.getItem('login'));
    if (fetchToken) setToken(fetchToken.tokens);
  }, []);

  const signupUser = async (firstName, lastName, password, email) => {
    try {
      const resp = await SignupServices({
        firstName,
        lastName,
        password,
        email,
      });
      if (resp.status === 201) {
        localStorage.setItem(
          'login',
          JSON.stringify({
            token: resp.data.encodedToken,
            user: resp.data.createdUser,
          })
        );
        setUser(resp.data.createdUser);
        setToken(resp.data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signupUser,
        token,
        setToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
