import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoimg from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import ProfileName from "./ProfileName";
import { BsBoxArrowRight } from "react-icons/bs";

function Header() {
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  function handleLogOut(e) {
    const { data } = supabase.auth.signOut();
    console.log(data);
  }

  return (
    <div>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container className="container d-flex">
          <img
            className="me-3"
            style={{
              width: "40px",
              height: "auto",
            }}
            src={logoimg}
            alt=""
          />
          <Navbar.Brand>
            <h1 className="font mt-2">
              IL<span className="orange">OK</span>A
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {session ? (
                <>
                  <Nav.Link className="text-hover" href="/home">
                    Beranda
                  </Nav.Link>
                  <Nav.Link className="text-hover" href="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link className="text-hover" href="/info">
                    Info
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="text-hover" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="text-hover" href="/about">
                    About
                  </Nav.Link>
                  <Nav.Link className="text-hover" href="/contact">
                    Contact Us
                  </Nav.Link>
                </>
              )}
            </Nav>
            <ProfileName />
            <Nav>
              {session ? (
                <>
                  <button
                    className="icon btn mb-2"
                    href="/"
                    onClick={handleLogOut}
                  >
                    <BsBoxArrowRight />
                  </button>
                </>
              ) : (
                <Nav.Link className="bg-orange-hover bg-orange" href="/login">
                  Get Started
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
