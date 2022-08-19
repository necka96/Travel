import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Holder from "./container/Holder/Holder";
import SingleBLog from "./container/SingleBLog/SingleBLog";
import Preloader from "./Wraper/Preloader";
const App = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setPreloader(false);
    }, 2800);

    return () => {
      clearInterval(time);
      setPreloader(false);
    };
  }, []);

  return (
    <Preloader loading={preloader}>
      <Router>
        <Routes>
          <Route path='/' element={<Holder />} />
          <Route path='/blog/:slug' element={<SingleBLog />} />
        </Routes>
      </Router>
    </Preloader>
  );
};

export default App;
