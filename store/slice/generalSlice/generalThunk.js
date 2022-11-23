import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountryList = createAsyncThunk(
  "countryList/fetchCountryList",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const responseData = response.data;

    return responseData.map((country) => {
      return {
        id: country.name.common,
        name: country.name.common,
        flagURL: country.flags.svg,
      };
    });
  }
);
