import React, { useState } from "react";
import axios from "axios";

/**
 * @status
 * Todo: Functinality to be added to new sprng after product launch
 *
 * @description
 * The purpose of this hook is to fetch the users public IP Address and return it.
 * The IP Address is to serve as the entry to get the Users country which should be
 * used to set the users country by default while the user signs up on the platform.
 *
 **/

export const useGetUserIP = async () => {
  const [IP, setIP] = useState({});

  try {
    // should return users ip address
    const userIP = await axios.get("https://api64.ipify.org");

    setIP({
      data: userIP,
      status: "succcess",
    });
  } catch (err) {
    setIP({
      data: null,
      status: "succcess",
    });
  }
  return { IP };
};
