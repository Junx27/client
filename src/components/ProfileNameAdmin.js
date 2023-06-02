import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { BsPersonCircle } from "react-icons/bs";

const supabase = createClient(
  "https://dbhpkmvigjuofpaqsvxn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaHBrbXZpZ2p1b2ZwYXFzdnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MzEwNzQsImV4cCI6MjAwMDUwNzA3NH0.ug5C8CixUmJfbVpHavRonD0mqMuSDeaOiTPpbLoxcws"
);

export default function PrifileName() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id);

    setProfile(data);
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
    return <div></div>;
  } else {
    return (
      <div className="orange font_profile me-2">
        {profile &&
          profile.map((profile) => (
            <>
              <BsPersonCircle key={profile.id} className="me-3 icon" />
              {profile.nama}
            </>
          ))}
      </div>
    );
  }
}
