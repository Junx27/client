import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Registration() {
  let navigate = useNavigate();
  return (
    <div className="container w-50 mt-5">
      <h1 className="text-center mt-3 blue font">
        Registra<span className="orange">tion</span>
      </h1>
      <hr />
      <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => navigate("/signup")}
        >
          Registration
        </Button>
        <Form.Text className="text-muted d-flex flex-column mb-3 mt-3">
          Sudah punya akun
        </Form.Text>
        <button className="bg-orange" onClick={() => navigate("/login")}>
          Login
        </button>
      </Form>
    </div>
  );
}

export default Registration;
