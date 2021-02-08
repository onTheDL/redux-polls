import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared"
import Leaderboard from '../components/Leaderboard'

export default function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch()
  const loading = useSelector(state => state.authedUser === null)

  useEffect(() => {
    dispatch(handleInitialData())

  }, [dispatch]) 
  console.log('Store', store)

  return (
    <div className='container'>
      {loading === false && <Leaderboard />}

    </div>
  );
}
