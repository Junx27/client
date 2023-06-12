import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsBoxArrowRight } from "react-icons/bs";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

function LogoutUser() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogOut(e) {
    const { data } = supabase.auth.signOut();
    console.log(data);
    navigate("/");
  }

  return (
    <>
      <button className="icon btn mb-2" href="/" onClick={handleShow}>
        <BsBoxArrowRight />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="orange">Are you sure logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="blue text-center">
          Please confirm this button{" "}
          <span className="font text-danger">Close</span> to cancel and{" "}
          <span className="font text-info">Confirm</span> to logout
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleLogOut}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutUser;
