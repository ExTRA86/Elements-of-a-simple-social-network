import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GalleryService from '../API/GalleryService';
import Loader from '../components/Loader/Loader';
import { GalleryContext } from '../context';
import { useFetching } from '../hooks/useFetching';

const GalleryIdPage = () => {
  const { picture } = useContext(GalleryContext);
  console.log(picture);

  const params = useParams();
  const [pic, setPic] = useState({});

  const [fetchPicByID, isLoading, error] = useFetching(async id => {
    const response = await GalleryService.getById(id);
    setPic(response.data);
  });

  useEffect(() => {
    fetchPicByID(params.id);
  }, []);

  return (
    <div>
      <h1>Photo ID = {params.id}</h1>
      {isLoading ? <Loader /> : <div>{picture.pic.title}</div>}
      <h1>Картинка</h1>
      {isLoading ? <Loader /> : <img src={picture.pic.url} alt='' />}
    </div>
  );
};

export default GalleryIdPage;
