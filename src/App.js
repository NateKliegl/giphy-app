import "./App.css";
import React, { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

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
import { rootReducer, initialState } from "./shared/rootReducer";

import { useReducer } from "react";
function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Router>
      <Menu user={state.user} dispatch={dispatch} />

      <Switch>
        <ProtectedRoute shielded={false} path="/login" user={state.user}>
          <LoginPage dispatch={dispatch} />
        </ProtectedRoute>
        <ProtectedRoute user={state.user} shielded={true} path="/search">
          <SearchPage
            user={state.user}
            search={state.search}
            favorites={state.favorites}
            dispatch={dispatch}
          />
        </ProtectedRoute>
        <ProtectedRoute user={state.user} shielded={true} path="/favorites">
          <FavoritesPage
            user={state.user}
            favorites={state.favorites}
            dispatch={dispatch}
          />
        </ProtectedRoute>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
