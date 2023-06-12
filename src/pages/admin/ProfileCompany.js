import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "../../components/CardProfile";
import supabase from "../../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import Header from "../../components/HeaderAdmin";
import HeaderProfil from "./HeaderProfil";

function ProfileCompany() {
  let navigate = useNavigate();

  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchPosts() {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", session.user.id);

    if (posts) {
      setPosts(posts);
    }
    if (error) {
      setPosts(null);
      console.log(error);
    }
  }

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
  if (!session) {
    navigate("/");
  }

  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container mt-3">
        <HeaderProfil />
        <div className="row mt-5">
          <div className="col-lg-6 me-lg-3">
            <h5 className="orange text-center">Riwayat Lowongan Pekerjaan</h5>
            <hr />
            {posts &&
              posts.map((posts) => (
                <div className="shadow p-3 mb-5" key={posts.id}>
                  <Card posts={posts} />
                </div>
              ))}
          </div>
          <div className="col-lg-5 border-start">
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
                    <button className="btn btn-success me-3 mb-2">YES</button>
                    <button className="btn btn-danger mb-2">NO</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ratih Purwati</td>
                  <td>
                    <button className="btn btn-success me-2">Unduh</button>
                  </td>
                  <td>
                    <button className="btn btn-success me-3 mb-2">YES</button>
                    <button className="btn btn-danger mb-2">NO</button>
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
