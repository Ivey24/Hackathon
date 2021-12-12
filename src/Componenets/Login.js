import React from "react";
import './Login.css'
import Nav from "./Nav";

export default function Login() {
  return (
      <>
    <Nav menu={false} />
    <div className="container my-5">
        
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div className="container d-flex flex-column align-items-center ">
      <button className="btn btn-danger my-2" style={{width:"50%"}}>Register</button>
      <button className="btn btn-success my-2" style={{width:"50%"}}>Login with Google</button>
      <button className="btn btn-primary my-2" style={{width:"50%"}}>Login with Facebook</button>
      </div>

    </div>
    </>
  );
}
