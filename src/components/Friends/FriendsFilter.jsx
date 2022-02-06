import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const FriendsFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка'
        options={[
          { value: 'name', name: 'По имени' },
          { value: 'username', name: 'По нику' },
        ]}
      />
    </div>
  );
};

export default FriendsFilter;
