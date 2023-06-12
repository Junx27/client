/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [username1, setUserName1] = useState();
  const [session, setSession] = useState();
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, [getData]);

  async function getData() {
    const { data: test } = await supabase.from("test").select("*").eq("id", id);
    if (test) {
      setData(test);
    }
  }

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function handleUpdate() {
    let { data } = await supabase
      .from("test")
      .update({ username: username1 })
      .eq("id", id);
    navigate("/signup");
  }

  async function handleDelete() {
    let { data } = await supabase.from("test").delete().eq("id", id);
    navigate("/signup");
  }
  return (
    <div>
      {data &&
        data.map((profile) => {
          return (
            <div key={profile.id}>
              <h1>{profile.username}</h1>
            </div>
          );
        })}

      <div className="container w-50">
        <h2>Update</h2>
        <input
          type="text"
          value={username1}
          onChange={(e) => setUserName1(e.target.value)}
        />
        <br />
        <button className="btn btn-info mt-2 me-4" onClick={handleUpdate}>
          update
        </button>
        <button className="btn btn-danger mt-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Update;
