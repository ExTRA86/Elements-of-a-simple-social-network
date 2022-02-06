import React, { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/page';
import { useObserver } from '../hooks/useObserver';
import FriendsList from '../components/Friends/FriendstList';
import FriendsService from '../API/FriendsService';
import { useFriends } from '../hooks/useFriends';
import FriendsFilter from '../components/Friends/FriendsFilter';

function Friends() {
  const [friends, setFriends] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedFriends = useFriends(
    friends,
    filter.sort,
    filter.query,
  );
  const lastElement = useRef();

  const [fetchFriends, isFriendsLoading, friendError] = useFetching(
    async (limit, page) => {
      const response = await FriendsService.getAll(limit, page);
      setFriends([...friends, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    },
  );

  useObserver(lastElement, page < totalPages, isFriendsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchFriends(limit, page);
  }, [page, limit]);

  function removeFriend(friend) {
    setFriends(friends.filter(p => p.id !== friend.id));
  }

  return (
    <div className='App'>
      <FriendsFilter filter={filter} setFilter={setFilter} />
      {friendError && <h1>Произошла ошибка {friendError}</h1>}
      {isFriendsLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          <Loader />
        </div>
      )}
      <FriendsList
        remove={removeFriend}
        friends={sortedAndSearchedFriends}
        title='Мои друзья'
      />
      <div ref={lastElement} style={{ height: 20 }} />
    </div>
  );
}

export default Friends;
