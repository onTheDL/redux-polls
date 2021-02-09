import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import AddPoll from './AddPoll';
import Nav from './Nav';
import Poll from './Poll';

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
      <Nav />
      <div className="container">{loading === false && <div>
          <Route path='/' exact>
            <Dashboard />
          </Route>
          <Route path='/leaderboard'>
            <Leaderboard />
          </Route>
          <Route path='/polls/:id' exact>
            <Poll />
          </Route>
          <Route path='/add' exact>
            <AddPoll />
          </Route>
        </div> }</div>
    </Router>
  );
}
