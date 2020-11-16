import getFeed from './getFeed';

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        foo: 'bar',
      });
    },
  };
});

describe('getFeed', () => {
  test('should call /api', async () => {
    expect(await getFeed('foo')).toStrictEqual({ foo: 'bar' });
  });

  test('should return localCache(d) results', async () => {
    expect(await getFeed('foo')).toStrictEqual({ foo: 'bar' });

    localStorage.setItem('feed:foo', JSON.stringify({ foo: 'baz' }));

    expect(await getFeed('foo')).toStrictEqual({ foo: 'baz' });
  });
});
