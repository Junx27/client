import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function SignUp() {
  const [fetchError, setFetchError] = useState(null);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      const { data, error } = await supabase.from("Tunjangan_id").select("*");

      if (error) {
        setFetchError("Tidak Dapat mengambil data");
        setProductList(null);
        console.log(error);
      }
      if (data) {
        setProductList(data);
        console.log(data);
        setFetchError(null);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div>
      This is Home Pages
      <div>
        {fetchError && <p>{fetchError}</p>}
        {productList && (
          <div className="user">
            {productList.map((user) => (
              <div key={user.id}>
                <div className="text-primary">
                  metode pembayaran: {user.nama}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
