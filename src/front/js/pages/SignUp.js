import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  return (
    <div className="container flex-column d-flex h-100 align-items-center justify-content-center">
      <div className="row">
        <form>
          <input
            type="text"
            name="email"
            className="form-control my-1"
            value={email}
            placeholder="email"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="form-control my-1"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) =>
            actions.SignUp({
              email: email,
              password: password,
            })
          }
        >
          {"Sign up"}
        </button>
      </div>
    </div>
  );
};
