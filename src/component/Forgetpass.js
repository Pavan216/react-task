import React, { useState } from "react";

const Forgetpass = () => {
  const [qwe, setQwe] = useState({
    Email: "",
  });
  const onInpc = (e) => {
    setQwe({ ...qwe, [e.target.name]: e.target.value });
  };
  const submitHand = (e) => {
    e.preventDefault();
  };
  const { Email } = qwe;
  return (
    <div className="fpaswd mt-5">
      <div className="container-fluid card bg-light mt-5">
        <div className="row">
          <div className="col-sm-6 m-auto p-auto">
            <center>
              <h1>Welcome to World</h1>
              <p>Lets your Life Changes........</p>
            </center>
          </div>

          <div className="form-group  col-sm-6 mt-5 p-auto text-center">
          <h6>forget or reset password</h6>
            <input
              type="text"
              className=""
              name="Email"
              value={Email}
              placeholder="enter email address"
              onChange={(e) => onInpc(e)}
              required
            />
            <br />
            <button
              className="btn btn-primary mt-2"
              onSubmit={(e) => submitHand(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
