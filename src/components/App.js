import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "../components/Leaderboard";
import Dashboard from "../components/Dashboard";

export default function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  console.log("Store", store);

  return (
    <Router>
      <div className="container">{loading === false && <Dashboard />}</div>
    </Router>
  );
}
