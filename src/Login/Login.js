import { useState } from "react";
function Login() {
  const emailREG = new RegExp("^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$");
  const [user, setData] = useState({
    Email: "",
    Password: "",
  });
  const [userErr, setErr] = useState({
    Email: null,
    Password: null,
  });
  function validation(e) {
    if (e.target.name === "Email") {
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
    } else if (e.target.name === "Password") {
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
    }
  }
  return (
    <div>
      <div className="container justify-content-center">
        <div className="col-12">
          <h1>Login Page</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="Email"
                aria-describedby="emailHelp"
                value={user.Email}
                onChange={(e) => validation(e)}
              />
              <div id="Email" className="form-text text-danger">
                {userErr.Email}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="Password"
                value={user.Password}
                onChange={(e) => validation(e)}
              />
            </div>
            <div id="password" className="form-text text-danger">
              {userErr.Password}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
