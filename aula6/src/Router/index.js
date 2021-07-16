import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import MovieDetails from "../pages/MovieDetails";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
          <Movie />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
