/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import Card from "./CardTest";

function SignUp() {
  const [data, setData] = useState();
  const [username, setUserName] = useState();
  const [username1, setUserName1] = useState();
  const [session, setSession] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    getData();
  }, [getData]);

  async function getData() {
    let { data: test } = await supabase.from("test").select("*");
    setData(test);
  }
  async function handleCreate() {
    let { data: test } = await supabase
      .from("test")
      .insert([{ username, user_id: session.user.id }]);
    window.location.reload();
  }
  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      <div className="container w-50">
        Upload and Deploy in Vercel
        <h2>Create Data</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <button className="btn btn-warning mt-2" onClick={handleCreate}>
          Create
        </button>
      </div>

      <div className="container w-50 mt-5">
        <h2>Output Data</h2>
        <hr />
        {data &&
          data.map((profile) => {
            return (
              <div key={profile.id}>
                <Card data={profile} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SignUp;
