import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Filmes from "../Page/Filmes";
import Sobre from "../Page/Sobre";
import TopMovie from "../Page/TopMovie";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/Filmes">
          <Filmes />
        </Route>
        <Route exact path="/Filmes/:id">
          <Filmes />
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
    </BrowserRouter>
  );
}

export default Routes;
