import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const Dashboard = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push("/log")
  }
  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      history.push('/home');
    }
  });
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={() => handleClick()}>Logout</button>
    </div>

  )
}

export default Dashboard