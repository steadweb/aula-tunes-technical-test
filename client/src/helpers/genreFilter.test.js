import genreFilter from './genreFilter';

describe('genreFilter', () => {
  test('should return true if selectedGenre is falsy', () => {
    [null, false, '', 0].forEach((selectedGenre) => {
      expect(genreFilter(selectedGenre)()).toBe(true);
    });
  });

  test('should return empty array if genres is not an array', () => {
    [null, false, '', 0, undefined, {}].forEach((value) => {
      const items = [{ genres: value }];

      expect(items.filter(genreFilter({ genreId: 2 }))).toStrictEqual([]);
    });
  });

  test('should return empty array if selectedGenre is not found within genres', () => {
    const items = [{ genres: [{ genreId: 1 }] }];

    expect(items.filter(genreFilter({ genreId: 2 }))).toStrictEqual([]);
  });

  test('should return array if selectedGenre is not found within genres', () => {
    const items = [{ genres: [{ genreId: 1 }, { genreId: 2 }] }];

    expect(items.filter(genreFilter({ genreId: 1 }))).toStrictEqual([
      { genres: [{ genreId: 1 }, { genreId: 2 }] },
    ]);
  });

  test('should return true if genreId is found and filtered', () => {
    expect(genreFilter({ genreId: 1 })({ genres: [{ genreId: 1 }] })).toBe(
      true,
    );
  });

  test('should return false if genreId is found and filtered', () => {
    expect(genreFilter({ genreId: 1 })({ genres: [{ genreId: 2 }] })).toBe(
      false,
    );
  });

  test('should return false if genreId is not filtered', () => {
    expect(genreFilter({ genreId: 0 })({ genres: [{ genreId: 2 }] })).toBe(
      false,
    );
  });
});
