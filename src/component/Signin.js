import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
const Signin = () => {
  let navigate = useNavigate();
  const [qwe, setQwe] = useState({
    fname: "",
    lname: "",
    mobilenumber: "",
    email: "",
    dateofbirth: "",
    pswd1: "",
    pswd2: "", 
  });
  const { fname, lname, mobilenumber, email, dateofbirth, pswd1, pswd2 } = qwe;
  const onIn = (e) => {
    setQwe({ ...qwe, [e.target.name]: e.target.value });
  };
  const submitHand = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:7120/Signin", qwe);

    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("fname", JSON.stringify(fname));
    localStorage.setItem("lname", JSON.stringify(lname));
    localStorage.setItem("mobilenumber", JSON.stringify(mobilenumber));
    localStorage.setItem("dateofbirth", JSON.stringify(dateofbirth));
    localStorage.setItem("pswd1", JSON.stringify(pswd1));
    localStorage.setItem("pswd2", JSON.stringify(pswd2));
    navigate("/");
  };
  return (
    <div className="container-fluid card bg-light">
      <div className="row">
        <div className="col-sm-6 m-auto p-auto">
          <center>
            <h1>Wel come to World</h1>
            <p>Lets ur Life Changes........</p>
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
                name="fname"
                value={fname}
                placeholder="First-Name"
                onChange={(e) => onIn(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last-Name"
                name="lname"
                value={lname}
                className="form-control"
                onChange={(e) => onIn(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                className="form-control"
                onChange={(e) => onIn(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="Date of Birth"
                name="dateofbirth"
                value={dateofbirth}
                className="form-control"
                onChange={(e) => onIn(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Mobile number"
                name="mobilenumber"
                pattern="[6789][0-9]{9}"
                value={mobilenumber}
                className="form-control"
                onChange={(e) => onIn(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="pswd1"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}"
                value={pswd1}
                className="form-control"
                onChange={(e) => onIn(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm-password"
                name="pswd2"
                value={pswd2}
                className="form-control"
                onChange={(e) => onIn(e)}
              />
            </div>
            {pswd1 !== pswd2 ? (
              <p style={{ color: "red" }}>password not matched</p>
            ) : null}
            <div className="form-group">
              <button className="btn btn-secondary form-control">
                Register
              </button>
            </div>
            <p>
              Already Registered <Link to={"/Login"}>Log in ? </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
