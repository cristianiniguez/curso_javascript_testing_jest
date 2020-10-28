describe('Comparadores comunes', () => {
  const user = {
    name: 'Cristian',
    lastname: 'Iñiguez',
  };
  const user1 = {
    name: 'Cristian',
    lastname: 'Iñiguez',
  };
  const user2 = {
    name: 'Mary',
    lastname: 'Saucedo',
  };
  test('igualdad de elementos', () => {
    expect(user).toEqual(user1);
  });
  test('desigualdad de elementos', () => {
    expect(user).not.toEqual(user2);
  });
});
