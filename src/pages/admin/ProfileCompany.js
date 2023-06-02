import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import LogoCompany from "../../assets/images/logocompany.jpeg";
import Card from "../../components/CardProfile";
import supabase from "../../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import Header from "../../components/HeaderAdmin";

function ProfileCompany() {
  let navigate = useNavigate();
  const [session, setSession] = useState();

  const [posts, setPosts] = useState();
  const [nama, setNama] = useState();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchPosts() {
    const { data: posts } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", session.user.id);

    setPosts(posts);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id);

    setNama(profile);
  }

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!session) {
    navigate("/login");
  }

  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="text-center shadow p-3">
          <img
            className=""
            src={LogoCompany}
            style={{ width: "100px", height: "100px" }}
            alt=""
          />

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

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-info"
              onClick={() => {
                navigate("/createprofile");
              }}
            >
              edit
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 me-3">
            <h5 className="orange text-center">Riwayat Lowongan Pekerjaan</h5>
            <hr />
            {posts &&
              posts.map((posts) => (
                <div className="shadow p-3 mb-5">
                  <Card key={posts.id} posts={posts} />
                </div>
              ))}
          </div>
          <div className="col-5 border-start">
            <h5 className="orange text-center">Daftar Pelamar Kerja</h5>
            <hr />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Berkas</th>
                  <th>Confirm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Indra Lasmana</td>
                  <td>
                    <button className="btn btn-success me-2">Unduh</button>
                  </td>
                  <td>
                    <button className="btn btn-success me-2">YES</button>
                    <button className="btn btn-danger">NO</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ratih Purwati</td>
                  <td>
                    <button className="btn btn-success me-2">Unduh</button>
                  </td>
                  <td>
                    <button className="btn btn-success me-2">YES</button>
                    <button className="btn btn-danger">NO</button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCompany;
