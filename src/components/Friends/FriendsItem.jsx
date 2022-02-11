import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FriendsService from '../../API/FriendsService';
import { useFetching } from '../../hooks/useFetching';
import MyButton from '../UI/button/MyButton';

export default function FriendsItem(props) {
  const [avatarPicture, setAvatarPicture] = useState([]);
  const router = useNavigate();

  const showFriend = () => {
    router('/friends/' + props.friend.id);
  };

  const [fetchAvatarPicture] = useFetching(async id => {
    const response = await FriendsService.getPictureByFriendId(id);
    setAvatarPicture(response.data);
  });

  useEffect(() => {
    fetchAvatarPicture(props.friend.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div onClick={showFriend} className='profile__content'>
      <div>
        <img className='img_preview' src={avatarPicture.thumbnailUrl} alt='' />
        <div onClick={e => e.stopPropagation()} className='post__btns'>
          <MyButton onClick={() => props.remove(props.friend)}>
            Удалить из друзей
          </MyButton>
        </div>
      </div>
      <strong>
        {props.friend.username} <br /> {props.friend.name}
      </strong>
    </div>
  );
}
