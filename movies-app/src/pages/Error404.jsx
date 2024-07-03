import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="text-center text-white">404 Page Not Found</h1>

      <img
        className="mt-2"
        style={{ width: "500px" }}
        src="/notFound.jpg"
        alt=""
      />

      <div className="text-center">
        <Link to="/" className="btn btn-danger mt-3">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
