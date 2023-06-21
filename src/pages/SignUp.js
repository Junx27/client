/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import { AiFillCamera } from "react-icons/ai";

function SignUp() {
  const CDNURL =
    "https://rhmjeleyaoxxsomfutfr.supabase.co/storage/v1/object/public/gambar/";
  const [gambar, setImages] = useState([]);
  const [session, setSession] = useState();

  //get images
  async function getImages() {
    const { data, error } = await supabase.storage
      .from("gambar")
      .list(session.user.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      }); // Cooper/
    // data: [ image1, image2, image3 ]
    // image1: { name: "subscribeToCooperCodes.png" }

    // to load image1: CDNURL.com/subscribeToCooperCodes.png -> hosted image

    if (data !== null) {
      setImages(data);
    } else {
      window.location.reload();
    }
  }
  useEffect(() => {
    if (session) {
      getImages();
    }
  }, [session]);
  //end

  //upload images
  async function uploadImage(e) {
    let file = e.target.files[0];

    // userid: Cooper
    // Cooper/
    // Cooper/myNameOfImage.png
    // Lindsay/myNameOfImage.png

    const { data, error } = await supabase.storage
      .from("gambar")
      .upload(session.user.id + "/" + uuidv4(), file); // Cooper/ASDFASDFASDF uuid, taylorSwift.png -> taylorSwift.png

    if (data) {
      getImages();
      window.location.reload();
    } else {
      console.log(error);
    }
  }
  //end

  //delete image
  async function deleteImage(imageName) {
    const { error } = await supabase.storage
      .from("gambar")
      .remove([session.user.id + "/" + imageName]);

    if (error) {
      alert(error);
    } else {
      getImages();
    }
  }
  //end

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      {session === null ? (
        <>
          {" "}
          <h1>please login</h1>
        </>
      ) : (
        <>
          <div className="container">
            <Header />
            <h1 className="font blue fw-bold mt-5 pb-5 text-center">
              Pages For <span className="orange">Testing Code</span>
              <div className="bg-info w-50 py-2 mt-4 container rounded"></div>
            </h1>
          </div>

          <h1>Your ImageWall</h1>
          <h5 className="orange border py-2 w-50">
            <span className="blue">You Is Logged</span>
          </h5>
          <p>
            Use the Choose File button below to upload an image to your gallery
          </p>
          <Form.Group className="mb-3" style={{ maxWidth: "500px" }}>
            <label htmlFor="images" className="upload-images">
              <AiFillCamera className="icon" />
            </label>

            <Form.Control
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => uploadImage(e)}
              id="images"
              className="input-images"
            />
          </Form.Group>
          <hr />
          <h3>Your Images</h3>
          {/* 
            to get an image: CDNURL + user.id + "/" + image.name 
            images: [image1, image2, image3]  
          */}
          <Row xs={1} md={3} className="">
            {gambar.map((image) => {
              return (
                <Col key={CDNURL + session.user.id + "/" + image.name}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={CDNURL + session.user.id + "/" + image.name}
                    />
                    <Card.Body>
                      <Button
                        variant="danger"
                        onClick={() => deleteImage(image.name)}
                      >
                        Delete Image
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
}

export default SignUp;
