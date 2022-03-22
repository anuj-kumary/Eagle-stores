import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginServices, SignupServices } from '../../services/Services';

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

  const loginHandler = async (e, setLoginUser, loginUser) => {
    e.preventDefault();
    try {
      let resp;
      if (e.target.innerText === 'Login as Guest') {
        setLoginUser({
          email: 'adarshbalak@gmail.com',
          password: 'adarshBalaki123',
        });
        resp = await loginServices('adarshbalak@gmail.com', 'adarshBalaki123');
      } else resp = await loginServices(loginUser.email, loginUser.password);
      if (resp.status === 200 || resp.status === 201) {
        localStorage.setItem(
          'login',
          JSON.stringify({
            token: resp.data.encodedToken,
            user: resp.data.foundUser,
          })
        );
        setUser(resp.data.foundUser);
        setToken(resp.data.encodedToken);
        navigate('/product');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('login');
    setToken(null);
    setUser(null);
  };

  const signupUser = async (email, password, name) => {
    try {
      const resp = await SignupServices({ email, password, name });
      console.log(resp);
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
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signupUser,
        loginHandler,
        token,
        setToken,
        user,
        setUser,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
