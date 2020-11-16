const searchFilter = (search) => (item) => {
  if (!search) {
    return true;
  }

  return (
    ['artistName', 'name'].filter((value) => {
      if (!item[value]) {
        return false;
      }

      return item[value].toLowerCase().includes(search.toLowerCase());
    }).length > 0
  );
};

export default searchFilter;
