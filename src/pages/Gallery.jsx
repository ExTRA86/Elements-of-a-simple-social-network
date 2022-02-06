import React, { useEffect, useState } from 'react';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import GalleryService from '../API/GalleryService';
import Loader from '../components/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/page';
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';
import GalleryList from '../components/Gallery/GalleryList';
import GalleryFilter from '../components/Gallery/GalleryFilter';
import GalleryForm from '../components/Gallery/GalleryForm';
import { usePics } from '../hooks/usePics';

function Gallery() {
  const [pics, setPics] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPics = usePics(pics, filter.sort, filter.query);

  const [fetchPics, isPicsLoading, picError] = useFetching(
    async (limit, page) => {
      const response = await GalleryService.getAll(limit, page);
      setPics(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    },
  );

  useEffect(() => {
    fetchPics(limit, page);
  }, [limit]);

  function createPic(newPic) {
    setPics([...pics, newPic]);
    setModal(false);
  }

  function removePic(pic) {
    setPics(pics.filter(p => p.id !== pic.id));
  }

  const changePage = page => {
    setPage(page);
    fetchPics(limit, page);
  };

  return (
    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Добавить картинку
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <GalleryForm create={createPic} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <GalleryFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Кол-во картинок на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 20, name: '20' },
          { value: 30, name: '30' },
          { value: 50, name: '50' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      {picError && <h1>Произошла ошибка {picError}</h1>}
      {isPicsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          <Loader />
        </div>
      ) : (
        <GalleryList
          remove={removePic}
          pics={sortedAndSearchedPics}
          title='Галерея'
        />
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />

      <div className='page__wrapper'>
        {page > 1 ? (
          <MyButton onClick={() => changePage(page - 1)}>
            Предыдущая страница
          </MyButton>
        ) : (
          ''
        )}

        <MyButton onClick={() => changePage(page + 1)}>
          Следующая страница
        </MyButton>
      </div>
    </div>
  );
}

export default Gallery;
