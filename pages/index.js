import React, { useEffect } from "react";
import axiosConfig from "@utils/axiosConfig";

export default function Home() {
  useEffect(() => {
    authenticate().then((response) => {
      console.log(response);
    });
  }, []);

 const authenticate = async () => {
    try {
      let response = await axiosConfig.get("/home");
      return response.data;
    } catch (e) {
      return e;
    }
  };

  return <div className=""></div>;
}
