import React from 'react';

export default function GalleryFormImg({ setVisible, props }) {
  return <img src={props.pic.url} onClick={() => setVisible(false)} alt='' />;
}
