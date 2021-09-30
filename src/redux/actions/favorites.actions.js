// Add favorite
// Delete favorite
// Clear favorite

export const ADD_FAVORITE = "Add Favorite";
export function addFavorite(gif) {
  return { type: ADD_FAVORITE, gif };
}

export const DELETE_FAVORITE = "Delete Favorite";
export function deleteFavorite(id) {
  return { type: DELETE_FAVORITE, id };
}

export const CLEAR_FAVORITES = "Clear Favorite";
export function clearFavorites() {
  return { type: CLEAR_FAVORITES };
}
