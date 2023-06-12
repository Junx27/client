import React, { useEffect } from "react";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container shadow p-3">
        <div className=" text-start mt-5">
          <div className="ms-4">
            <h5 className="orange">ILOKA</h5>
            <hr />
            <br />
            <p className="blue ms-1" data-aos="fade-up">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ut
              unde numquam quaerat nostrum molestias expedita! Sit, cum. Non
              explicabo doloribus fuga sed labore pariatur quas unde enim!
              Laudantium, rerum! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. In ut unde numquam quaerat nostrum molestias
              expedita! Sit, cum. Non explicabo doloribus fuga sed labore
              pariatur quas unde enim! Laudantium, rerum! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. In ut unde numquam quaerat
              nostrum molestias expedita! Sit, cum. Non explicabo doloribus fuga
              sed labore pariatur quas unde enim! Laudantium, rerum! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. In ut unde
              numquam quaerat nostrum molestias expedita! Sit, cum. Non
              explicabo doloribus fuga sed labore pariatur quas unde enim!
              Laudantium, rerum! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. In ut unde numquam quaerat nostrum molestias
              expedita! Sit, cum. Non explicabo doloribus fuga sed labore
              pariatur quas unde enim! Laudantium, rerum! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. In ut unde numquam quaerat
              nostrum molestias expedita! Sit, cum. Non explicabo doloribus fuga
              sed labore pariatur quas unde enim! Laudantium, rerum! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. In ut unde
              numquam quaerat nostrum molestias expedita! Sit, cum. Non
              explicabo doloribus fuga sed labore pariatur quas unde enim!
              Laudantium, rerum! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. In ut unde numquam quaerat nostrum molestias
              expedita! Sit, cum. Non explicabo doloribus fuga sed labore
              pariatur quas unde enim! Laudantium, rerum! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. In ut unde numquam quaerat
              nostrum molestias expedita! Sit, cum. Non explicabo doloribus fuga
              sed labore pariatur quas unde enim! Laudantium, rerum!
            </p>
          </div>
          <div className="ms-4 mt-5" data-aos="fade-up">
            <h5 className="orange">Hubungi Kami</h5>
            <hr />
            <br />
            <div className="blue" data-aos="fade-up">
              <div>Email: iloka@gmail.com</div>
              <div>Tlp: 0987 1234 7876</div>
            </div>
          </div>
          <div className="ms-4 mt-5" data-aos="fade-up">
            <h5 className="orange">Developer</h5>
            <hr />
            <br />
            <div className="blue" data-aos="fade-down">
              <div>Senna Bhany Majid</div>
              <div>Ikshan Sulstyo Pambudi</div>
              <div>Sri Haryani</div>
              <div>Mizan Eka Putra</div>
              <div>Tri Saptono</div>
              <div>Muhamad Asvul Annas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
