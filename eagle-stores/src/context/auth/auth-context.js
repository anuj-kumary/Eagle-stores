import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localStorageToken = JSON.parse(localStorage.getItem('login'));
  const [token, setToken] = useState(localStorageToken?.token);
  const [user, setUser] = useState(null);

  const loginHandler = async (email, password) => {
    try {
      const resp = await axios.post('/api/auth/login', {
        email,
        password,
      });
      console.log(resp.data);
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
