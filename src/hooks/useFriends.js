import { useMemo } from 'react';

export const useStartedFriends = (friends, sort) => {
  const sortedFriends = useMemo(() => {
    if (sort) {
      return [...friends].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return friends;
  }, [sort, friends]);

  return sortedFriends;
};

export const useFriends = (friends, sort, query) => {
  const sortedFriends = useStartedFriends(friends, sort);
  const sortedAndSearchedFriends = useMemo(() => {
    return sortedFriends.filter(
      friend =>
        friend.name.toLowerCase().includes(query.toLowerCase()) +
        friend.username.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedFriends]);

  return sortedAndSearchedFriends;
};
