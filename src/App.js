import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./routes/Trending/Trending";
import Movies from "./routes/Movies/Movies";
import Series from "./routes/Series/Series";
import Search from "./routes/Search/Search";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
