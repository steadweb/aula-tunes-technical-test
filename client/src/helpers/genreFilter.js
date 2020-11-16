const genreFilter = (selectedGenre) => (item) => {
  if (!selectedGenre) {
    return true;
  }

  if (Array.isArray(item.genres) === false) {
    return false;
  }

  return (
    item.genres?.filter((genre) => genre.genreId === selectedGenre.genreId)
      .length > 0
  );
};

export default genreFilter;
