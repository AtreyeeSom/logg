import React, { useState } from 'react'
import {Form,Button} from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import axios from "axios"
const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loggedin,setLoggedin]=useState('false')
    const history=useHistory()
    const handleUsername=(e)=>{
    setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
     setPassword(e.target.value)
    }
    console.log({username,password});

    const handleApi=(e)=>{
       e.preventDefault();
         console.log({username,password});
        axios.post("https://www.abilitydiagnostics.com/beta-2.0/abadmin/api/Login/login",{
            username:username,
            password:password

        })
        .then(result=>{
            console.log(result);
            localStorage.setItem('token',result.data.token)
            if(username==="labdoc" && password==="ADsaltlake"){
              setLoggedin('true')
              alert("successfully logged in")
              history.push("/dash")
            }
            else{
              alert("unsuccessful")
              //history.push("/home")
            }
          })
      
        .catch(error =>{
            console.log(error.result);
           
        })
    }
    
   
  return (
    <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
    <Form.Control type="text" value={username} onChange={handleUsername} placeholder="Enter username"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={password} onChange={handlePassword} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleApi}>
    Submit
  </Button>
</Form>
</div>
  )
}

export default Login