import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

export default function GalleryForm({ create }) {
  const [pic, setPic] = useState({
    title: '',
    url: '',
  });

  function addNewPic(e) {
    e.preventDefault();
    const newPic = {
      ...pic,
      id: nanoid(),
    };
    create(newPic);
    setPic({ title: '', url: '' });
  }

  return (
    <form>
      <MyInput
        value={pic.title}
        onChange={e => setPic({ ...pic, title: e.target.value })}
        type='text'
        placeholder='Название картинки'
      />

      <MyInput
        value={pic.url}
        onChange={e => setPic({ ...pic, url: e.target.value })}
        type='text'
        placeholder='url адрес картинки'
      />
      <MyButton onClick={addNewPic}>Загрузить картинку</MyButton>
    </form>
  );
}
