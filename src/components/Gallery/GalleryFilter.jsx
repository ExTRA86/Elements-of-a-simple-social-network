import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const GalleryFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск по названию'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: '', name: 'По номеру' },
        ]}
      />
    </div>
  );
};

export default GalleryFilter;
