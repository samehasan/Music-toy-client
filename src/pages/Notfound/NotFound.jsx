import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
             
              <div className="mb-4 lead">
               <h2>The page you are looking for was not found.</h2> 
              </div>
              
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-primary align-center mb-3"
                >
                  Back to Home
                </button>
              </Link>
             
            </div>
             <img src="https://thumbs.dreamstime.com/b/website-error-page-not-found-vector-artwork-depicts-funny-humorous-scenario-human-stick-figure-http-request-85523047.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;