import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Login from "./pages/user/Login";
import Home from "./pages/user/Home";
import HomeAdmin from "./pages/admin/HomeAdmin";
import CreateProfile from "./pages/admin/CreateProfile";
import CreateProfileUser from "./pages/user/CreateProfileUser";
import Profile from "./pages/user/Profile";
import Info from "./pages/Info";
import Registration from "./pages/user/Registration";
import CreatePost from "./pages/admin/CreatePost";
import LandingPages from "./pages/LandingPages";
import ProfilCompany from "./pages/admin/ProfileCompany";
import Contact from "./pages/Contact";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";
import whatsapp from "./assets/images/whatsapp.png";
import line from "./assets/images/line.png";
import Admin from "./pages/admin/LoginAdmin";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/createpost" element={<CreatePost />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/" element={<LandingPages />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profilecompany" element={<ProfilCompany />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/homeadmin" element={<HomeAdmin />} />
          <Route exact path="/createprofile" element={<CreateProfile />} />
          <Route
            exact
            path="/createprofileuser"
            element={<CreateProfileUser />}
          />
        </Routes>
      </Router>
      <div className="container">
        <div className="row text-start mt-5">
          <hr />
          <div className="col-3">
            <h5 className="orange">ILOKA</h5>
            <p className="blue fw-light mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              cupiditate temporibus, nulla nostrum quae ipsum? Accusamus enim
              perferendis corrupti maiores obcaecati? Animi odio quo veritatis
              ducimus, obcaecati eveniet voluptatem aperiam.
            </p>
          </div>
          <div className="col-3">
            <h5 className="orange">Alamat</h5>
            <p className="blue fw-light mt-3">
              Jl. Letnan Jenderal S Parman No.55, Kedung Menjangan, Bancar, Kec.
              Purbalingga, Kabupaten Purbalingga, Jawa Tengah 53316
            </p>
          </div>
          <div className="col-3">
            <h5 className="orange">Hubungi Kami</h5>
            <div className="blue fw-light mt-3">
              <div>Email: iloka@gmail.com</div>
              <div>Tlp: 0987 1234 7876</div>
              <div>Sosial Media:</div>
              <div className="mt-2">
                <img className="sosial-media me-2" src={whatsapp} alt="" />
                <img className="sosial-media me-2" src={facebook} alt="" />
                <img className="sosial-media me-2" src={instagram} alt="" />
                <img className="sosial-media me-2" src={line} alt="" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <h5 className="orange">Developer</h5>
            <div className="blue fw-light mt-3">
              <ul>
                <li>Senna Bhany Majid</li>
                <li>Ikshan Sulstyo Pambudi</li>
                <li>Sri Haryani</li>
                <li>Mizan Eka Putra</li>
                <li>Tri Saptono</li>
                <li>Muhamad Asvul Annas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-muted-footer text-center mt-3">
        Copyright@ILOKA2023
      </div>
    </div>
  );
}

export default App;
