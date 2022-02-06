export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages, page) => {
  let result = [];
  // for (let i = 0; i < totalPages; i++) {
  //   result.push(i + 1);
  // }
  if (totalPages > 20) {
    if (page > 5) {
      for (let i = page - 4; i <= page + 5; i++) {
        result.push(i);
        if (i === totalPages) break;
      }
    } else {
      for (let i = 1; i <= 20; i++) {
        result.push(i);
        if (i === totalPages) break;
      }
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
  }

  return result;
};
