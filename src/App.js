import React from "react";
import { useRoutes } from "react-router-dom";

import Header from "./components/header/Header";
import { routers as MyRoutes } from "./routes";

export default function App() {
  let routes = useRoutes(MyRoutes);
  return (
    <>
      <Header />
      {routes}
    </>
  );
}
