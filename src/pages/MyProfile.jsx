import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import c from '../styles/Navbar.module.css';

const MyProfile = () => {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <div>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 20,
          }}
        >
          Мой профиль
        </h1>
      </div>
      <div className='profile'>
        <img
          className='profile__img'
          src='https://avatars.mds.yandex.net/i?id=fb3d5a6a0ceefc560e54b859daafce3a-4727879-images-thumbs&n=13'
          alt=''
        />
        <strong className='profile__description'>
          Описание профиля:
          <div className='profile__text'>
            <div>Имя: </div>
            <div>Никнейм: </div>
            <div>email: </div>
            <div>Номер телефона: </div>
          </div>
          {hide ? (
            ''
          ) : (
            <div className='profile__text'>
              <div>Место работы: </div>
              <div>Адрес: </div>
              <div>Вебсайт: </div>
            </div>
          )}
          <MyButton style={{ marginLeft: 5 }} onClick={() => setHide(!hide)}>
            {hide ? 'Подробнее' : 'Скрыть'}
          </MyButton>
        </strong>

        <div>
          <MyButton style={{ marginLeft: 10 }}>
            <Link to='/friends' className={c.navbar__btns}>
              Друзья
            </Link>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
