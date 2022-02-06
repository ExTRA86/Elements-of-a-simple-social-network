import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import c from '../../../styles/Navbar.module.css';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [color, setColor] = useState(c.navbar__btns);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className={c.navbar}>
      {isAuth ? (
        <MyButton onClick={logout}>Выйти</MyButton>
      ) : (
        <MyButton>
          <Link to='/Login' className={c.navbar__btns}>
            Войти
          </Link>
        </MyButton>
      )}
      <div className={c.nav}>
        <div className={c.navbar__links}>
          <Link to='/main' className={c.active}>
            Главная
          </Link>
          <Link to='/about'> О сайте</Link>
          <Link to='/posts'> Посты</Link>
          <Link to='/gallery'> Галерея</Link>
          <Link to='/myProfile'> Мой профиль</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
