import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Home from "./Home";

const Login = () => {
  const [home, setHome] = useState(true);
  const [flag, setFlag] = useState(false);
  const { id } = useParams();
  const [qwe, setQwe] = useState({
    Email: "",
    pswd1: "",
  });

  const { Email, pswd1 } = qwe;
  const onInpc = (e) => {
    setQwe({ ...qwe, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    ram();
  }, []);
  const ram = async () => {
    const result = await axios.get(`http://localhost:7120/Signin/${id}`);
    setQwe(result.data);
  };

  const submitHand = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:7120/Signin/${id}`, qwe);
    let email = localStorage.getItem("email").replace(/"/g, "");
    let pswd = localStorage.getItem("pswd1").replace(/"/g, "");
    if (!Email || !pswd1) {
      setFlag(true);
    } else if (Email !== email || pswd1 !== pswd) {
      setFlag(true);
    } else {
      setFlag(false);
      setHome(!home);
    }
  };

  return (
    <div>
      {home ? (
        <div className="container-fluid card bg-light mt-5">
          <div className="row">
            <div className="col-sm-6 m-auto p-auto">
              <center>
                <h1>Welcome to World</h1>
                <p>Lets your Life Changes........</p>
              </center>
            </div>
            <div className="card-body col-sm-6">
              <form
                className="col-sm-8 m-auto p-auto bg-light card"
                onSubmit={(e) => submitHand(e)}
              >
                <div className="form-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="Email"
                    value={Email}
                    placeholder="Username,email,phone number"
                    onChange={(e) => onInpc(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  {/* pattern='^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}'  */}
                  <input
                    type="password"
                    placeholder="Password"
                    name="pswd1"
                    value={pswd1}
                    className="form-control"
                    onChange={(e) => onInpc(e)}
                    required
                  />
                </div>
                <div className="fpswd1">
                  <Link to="/fpswdd">
                    <p className="text-dark fpswd ">
                      forgot password / <span>reset password</span>
                    </p>
                  </Link>
                </div>

                {flag && (
                  <alert className="text-danger">
                    **Please enter valid creditionals**
                  </alert>
                )}
                <button className="btn btn-primary">Login</button>
                <br />

                <Link to="/Signin">
                  <button className="btn btn-dark form-control">
                    Create a new account
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
