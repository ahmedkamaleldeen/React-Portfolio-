import React from "react";
import { useState } from "react";
function Register() {
  const emailREG = new RegExp("^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$");
  const [user, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    RepeatPassword: "",
  });
  const [userErr, setErr] = useState({
    Name: null,
    Email: null,
    Password: null,
    RepeatPassword: null,
  });
  function validation(e) {
    if (e.target.id === "name") {
      setData({
        ...user,
        Name: e.target.value,
      });
      setErr({
        ...user,
        Name: e.target.value.length === 0 ? "field is required" : null,
      });
    } else if (e.target.id === "email") {
      setData({
        ...user,
        Email: e.target.value,
      });
      setErr({
        ...userErr,
        Email:
          e.target.value.length === 0
            ? "field is required"
            : !emailREG.test(e.target.value)
            ? "should match email pattern"
            : null,
      });
    } else if (e.target.id === "password") {
      setData({
        ...user,
        Password: e.target.value,
      });
      setErr({
        ...userErr,
        Password:
          e.target.value.length === 0
            ? "field is required"
            : e.target.value.length < 8
            ? "min length should be 8"
            : null,
      });
      //   }else if(e.target.RepeatPassword===Password){
      //       setData({
      //           RepeatPassword:
      //       })
    } else if (e.target.id === "repeatpassword") {
      setData({
        ...user,
        RepeatPassword: e.target.value,
      });
      setErr({
        ...userErr,
        RepeatPassword:
          e.target.value.length === 0
            ? "field is required"
            : e.target.value != user.Password
            ? "should match password"
            : null,
      });
    }
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              value={user.Name}
                              onChange={(e) => validation(e)}
                            />
                            <div id="name" className="form-text text-danger">
                              {userErr.Name}
                            </div>
                            <label className="form-label" for="name">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              value={user.Email}
                              onChange={(e) => validation(e)}
                            />
                            <div id="name" className="form-text text-danger">
                              {userErr.Email}
                            </div>
                            <label className="form-label" for="email">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              value={user.Password}
                              onChange={(e) => validation(e)}
                            />
                            <div
                              id="password"
                              className="form-text text-danger"
                            >
                              {userErr.Password}
                            </div>
                            <label className="form-label" for="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="repeatpassword"
                              className="form-control"
                              value={user.RepeatPassword}
                              onChange={(e) => validation(e)}
                            />
                            <div
                              id="password"
                              className="form-text text-danger"
                            >
                              {userErr.RepeatPassword}
                            </div>
                            <label className="form-label" for="repeatpassword">
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Register;
