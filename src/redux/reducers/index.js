import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import favoritesReducer from "./favorites.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  search: searchReducer,
});

export default rootReducer;
