import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClientAdmin";
import Header from "../../components/HeaderAdmin";

function LoginAdmin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();

    const { data } = supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(data);
    if (email !== { email } && password !== { password }) {
      navigate("/homeadmin");
    }
  }
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container w-50">
        <h1 className="text-center mt-3 blue font">
          L<span className="orange">og</span>in Admin
        </h1>
        <hr />
        <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={handleEmail} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
          <button className="btn btn-primary me-5" onClick={handleLogin}>
            Login
          </button>
        </Form>
      </div>
    </>
  );
}

export default LoginAdmin;
