import searchFilter from './searchFilter';

describe('searchFilter', () => {
  test('should return true if search is falsy', () => {
    [null, false, '', 0].forEach((search) => {
      expect(searchFilter(search)()).toBe(true);
    });
  });

  test('should return true if search is included within artistName and ignore case', () => {
    expect(searchFilter('Foo')({ artistName: 'Foo Bar' })).toBe(true);
    expect(searchFilter('FOO')({ artistName: 'Foo Bar' })).toBe(true);
    expect(searchFilter('foo')({ artistName: 'Foo Bar' })).toBe(true);
  });

  test('should return true if search is included within name and ignore case', () => {
    expect(searchFilter('baz')({ name: 'Baz' })).toBe(true);
    expect(searchFilter('BAZ')({ name: 'Baz' })).toBe(true);
    expect(searchFilter('Baz')({ name: 'Baz' })).toBe(true);
  });
});
