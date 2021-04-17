import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Customers from "../pages/Customers";
import OrderDetails from "../pages/OrderDetails";
import Nav from "../component/Nav"
import Home from "../pages/Home"
import Explainer from "../component/Explainer";

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <div class="navigation">
          <Nav />
        </div>
        <div class="pgbody">
          <Switch>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/order_details">
              <OrderDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
