export function checkFavoriteItem(favoriteList, id) {
  return favoriteList.find(f => f.id === id);
}
