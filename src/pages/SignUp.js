import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import img from "../assets/images/facebook.png";
import img1 from "../assets/images/instagram.png";

function SignUp() {
  let navigate = useNavigate();
  const [nama, setPost] = useState();
  const [session, setSession] = useState(null);
  const [gambar, setGambar] = useState();

  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id)
      .single();

    if (data) {
      setProfile(data?.nama);
    }
  }
  console.log(profile);

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

    const { data } = await supabase.from("profile").insert([
      {
        nama,
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
      <input type="text" value={nama} onChange={handlePost} />
      <button onClick={handleSubmit}>submit</button>
      <br />
      <br />
      <button onClick={handleLogin}>login</button>
      <button onClick={handleCreateAdmin}>Create Admin</button>
      <button onClick={handleSignOut}>Signout</button>

      <Form.Group className="mb-2 mt-3">
        <Form.Label>gambar</Form.Label>
        <Form.Control type="text" placeholder="" value={profile} />
      </Form.Group>
      <Form.Select
        className="mb-3"
        value={gambar}
        onChange={(e) => setGambar(e.target.value)}
      >
        <option></option>
        <option value={img}>facebook</option>
        <option value={img1}>instagram</option>
      </Form.Select>
    </div>
  );
}

export default SignUp;
