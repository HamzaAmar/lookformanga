import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, About, Contact, Mangas } from "./pages/index";

function Route() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exec path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/mangas" component={Mangas} />
        <Route default component={fourOFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default Route;
