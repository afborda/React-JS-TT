import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Filmes from "../Page/Filmes";
import MovieDatails from "../Page/MovieDatails";
import Sobre from "../Page/Sobre";
import TopMovie from "../Page/TopMovie";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filmes />
        </Route>
        <Route exact path="/Filmes/:id">
          <MovieDatails />
        </Route>
        <Route exact path="/Topmovie">
          <TopMovie />
        </Route>
        <Route exact path="/Sobre">
          <Sobre />
        </Route>
        <Route exact path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
