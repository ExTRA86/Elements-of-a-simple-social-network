import React from 'react';
import GalleryItem from './GalleryItem';

export default function GalleryList({ pics, title, remove }) {
  if (!pics.length) {
    return <h1 style={{ textAlign: 'center' }}>Картинки не найдены!</h1>;
  }

  return (
    <div className='gallery'>
      <h1 className='title'>{title}</h1>
      {pics.map((pic, index) => (
        <GalleryItem
          remove={remove}
          number={index + 1}
          pic={pic}
          key={pic.id}
        />
      ))}
    </div>
  );
}
