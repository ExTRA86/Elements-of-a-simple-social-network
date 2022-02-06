import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import c from '../styles/Navbar.module.css';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type='text' placeholder='Введите логин' />
        <MyInput type='password' placeholder='Введите пароль' />
        <MyButton onClick={login}>
          <Link to='/main' className={c.navbar__btns}>
            Войти
          </Link>
        </MyButton>
      </form>
    </div>
  );
};

export default Login;
