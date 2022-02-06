import { useMemo } from 'react';

export const useStartedPics = (pics, sort) => {
  const sortedPics = useMemo(() => {
    if (sort) {
      return [...pics].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return pics;
  }, [sort, pics]);

  return sortedPics;
};

export const usePics = (pics, sort, query) => {
  const sortedPics = useStartedPics(pics, sort);
  const sortedAndSearchedPics = useMemo(() => {
    return sortedPics.filter(pic =>
      pic.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedPics]);

  return sortedAndSearchedPics;
};
