import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import Registration from "./pages/Registration";
import CreatePost from "./pages/CreatePost";
import LandingPages from "./pages/LandingPages";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoimg from "././assets/images/logo.png";

function App() {
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
          <Navbar.Brand href="/landingpages">
            <h1 className="font mt-2">
              IL<span className="orange">OK</span>A
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-hover" href="/">
                Beranda
              </Nav.Link>
              <Nav.Link className="text-hover" href="/createpost">
                Create
              </Nav.Link>
              <Nav.Link className="text-hover" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="text-hover" href="/profile">
                Profile
              </Nav.Link>
              <Nav.Link className="text-hover" href="/info">
                Info
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="bg-orange-hover bg-orange" href="/login">
                Get Started
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/createpost" element={<CreatePost />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/landingpages" element={<LandingPages />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
