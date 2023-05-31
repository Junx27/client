import React from "react";
import { useNavigate } from "react-router-dom";

function LoginSession() {
  let navigate = useNavigate();
  return (
    <div className="container shadow p-3 mt-5">
      <h3 className="font orange text-center">
        <span className="blue">Plese Login</span> To Accsess
      </h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci
        repellat laboriosam, iure delectus nostrum sapiente optio incidunt
        soluta iste mollitia blanditiis illo officia accusantium illum odio,
        expedita repellendus saepe.
      </p>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-info" onClick={() => navigate("/login")}>
          Click Here
        </button>
      </div>
    </div>
  );
}

export default LoginSession;
