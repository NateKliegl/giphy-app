import "./App.css";
import React, { useState } from "react";
import Menu from "./components/Menu";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritePage";
function App() {
  const [favorites, setFavorites] = useState([]);
  function addFavorite(gif) {
    setFavorites((curr) => [...curr, gif]);
  }
  function deletefavorite(id) {
    setFavorites((curr) => curr.filter((val) => val.id !== id));
  }
  const [activeUser, setActiveUser] = useState("");
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/login">
          <LoginPage setActiveUser={setActiveUser} />
        </Route>
        <Route path="/search">
          <SearchPage
            activeUser={activeUser}
            favorites={favorites}
            addFavorite={addFavorite}
            deletefavorite={deletefavorite}
          />
        </Route>
        <Route path="/favorites">
          <FavoritesPage
            activeUser={activeUser}
            favorites={favorites}
            deletefavorite={deletefavorite}
          />
        </Route>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
