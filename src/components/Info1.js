import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";

function Example() {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <Button
        variant="warning"
        onClick={() => setOpen(!open)}
        aria-controls="button-control"
        aria-expanded={open}
      >
        Join Now Here, Click Me!
      </Button>
      <Collapse in={open}>
        <div id="button-control" className="mt-3">
          <button
            className="btn btn-info"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Mendaftar
          </button>
          <button
            className="btn border-primary mx-5"
            onClick={() => {
              navigate("/login");
            }}
          >
            Masuk
          </button>
        </div>
      </Collapse>
    </>
  );
}

export default Example;
