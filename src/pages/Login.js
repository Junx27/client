import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div className="container w-50">
      <h1 className="text-center mt-3 blue font">
        L<span className="orange">og</span>in
      </h1>
      <hr />
      <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button
          className="btn btn-primary me-5"
          onClick={() => {
            navigate("/");
          }}
        >
          Submit
        </button>
        <button
          className="bg-orange"
          onClick={() => {
            navigate("/registration");
          }}
        >
          Mendaftar
        </button>
      </Form>
    </div>
  );
}

export default Login;
