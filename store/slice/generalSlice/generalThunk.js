import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountryList = createAsyncThunk(
  "countryList/fetchCountryList",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const responseData = response.data;

    console.log("Successfully fetched country lists...");
    return responseData.map((country) => {
      return {
        id: country.name.common,
        name: country.name.common,
        flagURL: country.flags.svg,
      };
    });
  }
);
