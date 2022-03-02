import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#0a4275" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                >
                  Sign up!
                </button>
              </p>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:<i class="fa-brands fa-twitter"></i>
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </section>
    );
  }
}
export default Footer;