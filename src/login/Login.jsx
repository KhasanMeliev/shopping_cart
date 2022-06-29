import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const values = { name: "", email: "", password: "" };
  const [details, setDetails] = useState(values);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name === null || details.name === "") {
      alert("Name isn't blank!");
      return false;
    } else if (details.email === null || details.email === "") {
      alert("Email isn't blank");
      return false;
    } else if (details.password === null || details.password === "") {
      alert("Password isn't blank");
      return false;
    } else {
      alert("your message succesfully sent");
      return true;
    }
  };

  return (
    <div className="login">
      <form
        action="https://formsubmit.co/khasanmeliev2@gmail.com"
        onSubmit={submitHandler}
      >
        <h1>Login</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Name..."
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            name="name"
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email..."
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            name="email"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            name="password"
            autoComplete="off"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
