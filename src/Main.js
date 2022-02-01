import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from "./containers/homepage";

const Main = () => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Homepage}></Route>
    </Routes>
  );
}

export default Main;