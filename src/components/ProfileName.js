import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rhmjeleyaoxxsomfutfr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobWplbGV5YW94eHNvbWZ1dGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MDU2NTYsImV4cCI6MTk5OTE4MTY1Nn0.Sph_5i5LbER1fQXMsBuO72Rkx_VPsaO47liXOcdMKAs"
);

export default function PrifileName() {
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
    return <div className="blue font me-4">{session.user.email}</div>;
  }
}
