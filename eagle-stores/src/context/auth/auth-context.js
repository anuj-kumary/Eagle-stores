import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginServices } from '../../services/Services';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localStorageToken = JSON.parse(localStorage.getItem('login'));
  const [token, setToken] = useState(localStorageToken?.token);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchToken = JSON.parse(localStorage.getItem('login'));
    if (fetchToken) setToken(fetchToken.tokens);
  }, []);

  const loginHandler = async (email, password) => {
    try {
      const resp = await loginServices({ email, password });
      if (resp.status === 200 || resp.status === 201) {
        localStorage.setItem(
          'login',
          JSON.stringify({ tokens: resp.data.encodedToken })
        );
        setUser(resp.data.foundUser);
        setToken(resp.data.encodedToken);
        navigate('/product');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
