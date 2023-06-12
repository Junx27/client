import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClientAdmin";
import Header from "../../components/HeaderAdmin";

function LoginAdmin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState(null);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!email) {
      setFormError("Masukan Email");
      return;
    }
    if (!password) {
      setFormError("Masukan Password");
      return;
    }
    const { data } = supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    navigate("/homeadmin");
  }

  let navigate = useNavigate();
  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container">
        <h1 className="text-center mt-3 blue font">
          L<span className="orange">og</span>in Admin
        </h1>
        <hr />
        <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className="mb-3 span">{formError}</p>
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
          <div>
            <div className="text-muted my-3">Login Sebagai User</div>
            <hr />
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate("/login");
              }}
            >
              User
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LoginAdmin;
