import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Main, Pepperjam, Paragon } from "../components/portals";
import Header from "../components/navigation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/pepperjam" exact component={Pepperjam} />
        <Route path="/paragon" exact component={Paragon} />
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
