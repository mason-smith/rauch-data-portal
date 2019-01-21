import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Main, Pepperjam } from "../components/portals";
import Header from "../components/navigation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/pepperjam" exact component={Pepperjam} />
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
