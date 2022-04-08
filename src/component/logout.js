import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const Logout = () => {

    const history  = useHistory();
    useEffect(() => {
        let token = localStorage.getItem('token');
        axios.post("https://www.abilitydiagnostics.com/beta-2.0/abadmin/api/Login/logout_user", token).then(data => {
            console.log(data);
            localStorage.removeItem('token');
            history.push('/login');
        })

    }, [])



    return (
        <div><h1>Please Login</h1></div>
    )
}

export default Logout