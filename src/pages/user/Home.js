import React, { useEffect, useState } from "react";
import BerandaEvent from "../../components/BerandaEvent";
import Card from "../../components/Card";
import supabase from "../../config/supabaseClientAdmin";
import supabase1 from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import LoginSession from "../../components/LoginSession";
import Header from "../../components/HeaderAdmin";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoimg from "../../assets/images/logo.png";
import ProfileName from "../../components/ProfileName";
import { BsBoxArrowRight } from "react-icons/bs";

function Home() {
  let navigate = useNavigate();
  const [session, setSession] = useState();

  const [posts, setPosts] = useState();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchPosts() {
    const { data: posts } = await supabase.from("posts").select("*");

    setPosts(posts);
  }
  console.log(posts);
  useEffect(() => {
    setSession(supabase1.auth.getSession());

    supabase1.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  function handleLogOut(e) {
    const { data } = supabase1.auth.signOut();
    console.log(data);
  }

  console.log(posts);
  return (
    <>
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
      <div className="container">
        <>
          {session ? (
            <>
              <div className="ms-5 mt-4">
                <BerandaEvent />
              </div>
              <hr />
              <div className="ms-2 mb-4 mt-3 d-flex align-items-center shadow px-3 py-3">
                <nav className="me-3 orange">New Post</nav>
                <nav className="me-3 text-muted">Popular Post</nav>
                <nav className="me-auto text-muted">Update Post</nav>
                <input type="text" className="rounded border border-warning" />
                <button className="btn bg-orange-btn bg-orange-hover-btn ms-2">
                  Search
                </button>
              </div>
              <div className="row text-center mt-5">
                <div className="col-3 ms-5 border-end">
                  <h4 className="font blue">Daftar Perusahaan</h4>
                  <hr />
                  <ul className="text-start">
                    <li>PT. ROYAL KORINDAH</li>
                    <li>PT. BOYANG INDUSTRIAL</li>
                    <li>PT. INDOKORES SAHABAT</li>
                    <li>PT. KESAN BARU SEJAHTERA</li>
                  </ul>
                </div>
                <div className="col-8 ms-3">
                  <h4 className="font blue">
                    Daftar Lowongan <span className="orange">Pekerjaan</span>
                  </h4>
                  <hr />
                  {posts &&
                    posts.map((posts) => (
                      <div className="shadow p-3 mb-5">
                        <Card key={posts.id} posts={posts} />
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <LoginSession />
          )}
        </>
      </div>
    </>
  );
}

export default Home;
