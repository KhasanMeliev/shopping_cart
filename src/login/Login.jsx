import React from "react";
import "./styles.css";
const Login = () => {
  return (
    <div className="login">
      <form action="/contact">
        <h1>Login</h1>
        <div className="inputs">
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
