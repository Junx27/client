import React, { useEffect, useState } from "react";
import supabase from "../../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Reset from "../../components/ResetProfileAdmin";
import { AiFillCamera, AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function HeaderProfil() {
  const CDNURL =
    "https://dbhpkmvigjuofpaqsvxn.supabase.co/storage/v1/object/public/gambar/";

  let navigate = useNavigate();
  const [nama, setNama] = useState();
  const [gambar, setImages] = useState([]);
  const [session, setSession] = useState();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data: profile, error } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id);

    if (profile) {
      setNama(profile);
    }
    if (error) {
      setNama(null);
      console.log(error);
    }
  }

  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("gambar")
      .upload(session.user.id + "/" + uuidv4(), file);

    if (data) {
      getImages();
      window.location.reload();
    } else {
      console.log(error);
    }
  }

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("gambar")
      .list(session.user.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

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
  // const downloadImage = async (imageSrc, imageName, forceDownload = false) => {
  //   const imageBlob = await fetch(imageSrc)
  //     .then((res) => res.arrayBuffer())
  //     .then((buffer) => new Blob([buffer], { type: "image/jpeg" }));

  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(imageBlob);
  //   link.download = imageName;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div>
      <div className="text-center shadow p-3">
        <label className="profile-admin mx-auto mb-4" htmlFor="images">
          <AiFillCamera className="icon-camera-admin" />
        </label>
        <input
          type="file"
          accept="image/jpeg"
          id="images"
          className="input-images"
          onChange={(e) => uploadImage(e)}
        />
        <div>
          {gambar.map((image) => {
            return (
              <>
                <img
                  src={CDNURL + session.user.id + "/" + image.name}
                  alt=""
                  className="profile-images-view"
                />
                <div className="btn-remove-admin">
                  <button
                    className="btn btn-warning mt-2 ms-2"
                    onClick={() => deleteImage(image.name)}
                  >
                    <AiFillDelete className="icon" />
                    <span className="text-hiden">Remove Image</span>
                  </button>
                  {/* <button
                    className="btn btn-warning mt-2 ms-2"
                    onClick={() => {
                      downloadImage(
                        CDNURL + session.user.id + "/" + image.name
                      );
                    }}
                  >
                    <span className="text-hiden">Download</span>
                  </button> */}
                </div>
              </>
            );
          })}
        </div>
        {nama &&
          nama.map((profile) => {
            return (
              <div key={profile.id}>
                <h5 className="orange">{profile.nama}</h5>
                <hr />
                <p className="text-muted">{profile.alamat}</p>
              </div>
            );
          })}
        <div className="text-end">
          <Reset />
          <button
            className="btn btn-info mt-2 ms-2"
            onClick={() => {
              navigate("/updateprofileadmin");
            }}
          >
            <CiEdit className="icon me-2" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfil;
