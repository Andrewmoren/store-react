// import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

import Cart from "./pages/Cart"
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";

// const Cart = React.lazy(() => import( /* webpackChunkName: "Cart" */ './pages/Cart'));
// const FullPizza = React.lazy(() => import( /* webpackChunkName: "FullPizza" */'./pages/FullPizza'));
// const NotFound  = React.lazy(() => import( /* webpackChunkName: "NotFound" */'./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="pizza/:id" element={<FullPizza/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
