import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import supabase from "../../config/supabaseClient";
import Modal from "react-bootstrap/Modal";
import Header from "../../components/Header";

function Registration() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate("/login");
  };
  const handleShow = () => setShow(true);

  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username) {
      setFormError("Masukan User");
      return;
    }
    if (!email) {
      setFormError("Masukan Email");
      return;
    }
    if (!password) {
      setFormError("Masukan Password");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error);
      setFormError("ada yang salah");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      handleShow();
    }
  }

  return (
    <>
      <Header />
      <div className="container w-50 mt-5">
        <h1 className="text-center mt-3 blue font">
          Registra<span className="orange">tion</span>
        </h1>
        <hr />
        <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
          <p className="mb-3 span">{formError}</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Registration
          </Button>
          <Form.Text className="text-muted d-flex flex-column mb-3 mt-3">
            Sudah punya akun
          </Form.Text>
          <button className="bg-orange" onClick={() => navigate("/login")}>
            Login
          </button>
        </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registration Berhasil</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah Anda Ingin Melanjutkan untuk login</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Registration;
