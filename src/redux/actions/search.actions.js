// Set Search
// Clear Search

export const SET_SEARCH = "Set Search";
export function setSearch(gifs) {
  return { type: SET_SEARCH, gifs };
}

export const CLEAR_SEARCH = "Clear Search";
export function clearSearch() {
  return { type: CLEAR_USER };
}
