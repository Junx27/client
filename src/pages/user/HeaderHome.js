import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoimg from "../../assets/images/logo.png";
import ProfileName from "../../components/ProfileName";
import supabase from "../../config/supabaseClient";
import Logout from "../../components/LogoutUser";

function HeaderHome() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
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
                  <Logout />
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

export default HeaderHome;
