import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiEdit } from "react-icons/ci";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

function LogoutAdmin() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [session, setSession] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleLogOut() {
    const { data, error } = await supabase
      .from("profile")
      .delete()
      .eq("user_id", session.user.id);

    navigate("/createprofileuser");
  }
  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      <button
        className="btn btn-danger mb-2 mt-3 ms-3"
        href="/"
        onClick={handleShow}
      >
        <CiEdit className="icon" /> Input Profile
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

export default LogoutAdmin;
