import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GalleryContext } from '../../context';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import GalleryFormImg from './GalleryFormImg';

export default function GalleryItem(props) {
  const { setPicture } = useContext(GalleryContext);
  const [modal, setModal] = useState(false);
  const router = useNavigate();

  const showPicture = () => {
    router('/gallery/' + props.pic.id);
    setPicture(props);
  };

  return (
    <div className='gallery__content'>
      <div>
        <strong>
          {props.pic.id} {props.pic.title}
        </strong>
        <br />
        <img
          className='img_preview'
          onClick={() => setModal(true)}
          src={props.pic.thumbnailUrl ? props.pic.thumbnailUrl : props.pic.url}
          alt=''
        />
        <MyModal visible={modal} setVisible={setModal}>
          <GalleryFormImg props={props} setVisible={setModal} />
        </MyModal>
      </div>
      <div className='post__btn2'>
        <MyButton onClick={showPicture}>Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.pic)}>Удалить</MyButton>
      </div>
    </div>
  );
}
