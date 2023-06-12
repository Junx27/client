import React, { useEffect, useState } from "react";
import BerandaEvent from "../../components/BerandaEvent";
import Card from "../../components/Card";
import supabase from "../../config/supabaseClientAdmin";
import supabase1 from "../../config/supabaseClient";
import Header from "./HeaderHome";
import LogoutSession from "../LogoutSession";

function Home() {
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
  useEffect(() => {
    setSession(supabase1.auth.getSession());

    supabase1.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container">
        <>
          {session ? (
            <>
              <div className="ms-lg--5 mt-4">
                <BerandaEvent />
              </div>
              <hr />
              <div className="ms-2 mb-4 mt-3 d-lg-flex align-items-center shadow px-3 py-3">
                <nav className="me-3 mt-2 orange">New Post</nav>
                <nav className="me-3 mt-2 text-muted">Popular Post</nav>
                <nav className="me-auto mt-2 text-muted">Update Post</nav>
                <input
                  type="text"
                  className="rounded border border-warning mt-2 "
                />
                <button className="mt-2 btn bg-orange-btn bg-orange-hover-btn ms-1">
                  Search
                </button>
              </div>
              <div className="row text-center mt-5">
                <div className="col-lg-3 ms-5 border-end">
                  <h4 className="font blue">Daftar Perusahaan</h4>
                  <hr />
                  <ul className="text-start">
                    <li>PT. ROYAL KORINDAH</li>
                    <li>PT. BOYANG INDUSTRIAL</li>
                    <li>PT. INDOKORES SAHABAT</li>
                    <li>PT. KESAN BARU SEJAHTERA</li>
                  </ul>
                </div>
                <div className="col-lg-8 ms-lg-3">
                  <h4 className="font blue">
                    Daftar Lowongan <span className="orange">Pekerjaan</span>
                  </h4>
                  <hr />
                  {posts &&
                    posts.map((posts, key) => (
                      <div className="shadow p-3 mb-5" key={key}>
                        <Card posts={posts} />
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <LogoutSession />
          )}
        </>
      </div>
    </>
  );
}

export default Home;
