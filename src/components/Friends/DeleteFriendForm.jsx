import React from 'react';
import MyButton from '../UI/button/MyButton';
import c from '../../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

export default function DeleteFriendForm({ friend, setVisible }) {
  function cancel(e) {
    e.preventDefault();
    setVisible(false);
  }

  return (
    <form style={{ textAlign: 'center' }}>
      <p>
        Вы действительно хотите удалить
        <strong> {friend.name}</strong> из списка друзей?
      </p>

      <div style={{ marginTop: 15 }}>
        <MyButton>
          <Link to='/friends' className={c.navbar__btns}>
            Да
          </Link>
        </MyButton>
        <MyButton style={{ marginLeft: 50 }} onClick={cancel}>
          Нет
        </MyButton>
      </div>
    </form>
  );
}
