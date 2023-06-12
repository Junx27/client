import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsBoxArrowRight } from "react-icons/bs";
import supabase from "../config/supabaseClientAdmin";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogOut(e) {
    const { data } = supabase.auth.signOut();
    console.log(data);
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
          <Modal.Title className="orange">Are you sure to logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="blue">Please confirm this button</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleLogOut}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
