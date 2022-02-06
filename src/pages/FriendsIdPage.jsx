import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FriendsService from '../API/FriendsService';
import DeleteFriendForm from '../components/Friends/DeleteFriendForm';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import { useFetching } from '../hooks/useFetching';

const FriendsIdPage = () => {
  const params = useParams();
  const [friend, setFriend] = useState({});
  const [avatarPicture, setAvatarPicture] = useState([]);
  const [hide, setHide] = useState(true);
  const [modal, setModal] = useState(false);

  const [fetchFriendByID, isLoading, error] = useFetching(async id => {
    const response = await FriendsService.getById(id);
    setFriend(response.data);
  });

  const [fetchAvatarPicture, isComLoading, comError] = useFetching(async id => {
    const response = await FriendsService.getPictureByFriendId(id);
    setAvatarPicture(response.data);
  });

  useEffect(() => {
    fetchAvatarPicture(params.id);
    fetchFriendByID(params.id);
  }, []);

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
          Профиль друга
        </h1>
      </div>
      <div className='profile'>
        <img className='profile__img' src={avatarPicture.url} alt='' />
        <strong className='profile__description'>
          Описание профиля:
          <div className='profile__text'>
            <div>Имя: {friend.name}</div>
            <div>Никнейм: {friend.username}</div>
            <div>email: {friend.email}</div>
            <div>Номер телефона: {friend.phone}</div>
          </div>
          {hide ? (
            ''
          ) : (
            <div className='profile__text'>
              <div>Место работы: {friend.company.name}</div>
              <div>Адрес: {friend.address.city}</div>
              <div>Вебсайт: {friend.website}</div>
            </div>
          )}
          <MyButton style={{ marginLeft: 5 }} onClick={() => setHide(!hide)}>
            {hide ? 'Подробнее' : 'Скрыть'}
          </MyButton>
        </strong>

        <div>
          <MyButton style={{ marginLeft: 10 }} onClick={() => setModal(true)}>
            Удалить из друзей
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
            <DeleteFriendForm friend={friend} setVisible={setModal} />
          </MyModal>
        </div>
      </div>
    </div>
  );
};

export default FriendsIdPage;
