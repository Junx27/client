import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  const [post, setPost] = useState();
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

  function handlePost(e) {
    setPost(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await supabase.from("post").insert([
      {
        post,
        user_id: session.user.id,
      },
    ]);
  }

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "admin@gmail.com",
      password: "adminku",
    });
    navigate("/homeadmin");
  };

  async function handleCreateAdmin(e) {
    e.preventDefault();

    let { data, error } = await supabase.auth.signUp({
      email: "admin@gmail.com",
      password: "adminku",
    });
  }
  const handleSignOut = async () => {
    const { data } = supabase.auth.signOut();
  };
  return (
    <div>
      <label htmlFor="">post</label>
      <br />
      <input type="text" value={post} onChange={handlePost} />
      <button onClick={handleSubmit}>submit</button>
      <br />
      <br />
      <button onClick={handleLogin}>login</button>
      <button onClick={handleCreateAdmin}>Create Admin</button>
      <button onClick={handleSignOut}>Signout</button>
    </div>
  );
}

export default SignUp;
