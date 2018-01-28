import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../views/Contact";
import PageFooter from '../components/PageFooter';
import Header from "../components/Header";
import Home from "../views/Home";
import NotFoundPage from "../views/NotFoundPage";
import About from "../views/About";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
      <PageFooter />
    </div>
  </BrowserRouter>
);
export default AppRouter;
