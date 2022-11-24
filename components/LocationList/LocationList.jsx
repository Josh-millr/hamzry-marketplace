import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LocationListItem } from "@components/index";
import { actions } from "@store/slice/userSlice/userReducer";
import { Input } from "@components/index";

export const LocationList = () => {
  const [searchValue, setSearchValue] = useState("");
  const { userLocation } = useSelector((state) => state.user);
  const { countryList } = useSelector((state) => state.general);

  console.log(searchValue);

  const dispatch = useDispatch();

  const setLocation = (country) => {
    // dispatch the location with the payload country to be stored in the state.
    dispatch(actions.setCountry(country));
  };

  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-y-6">
      <div className="bg-white w-full sticky top-0 grid grid-cols-1 grid-rows-1 gap-y-6 pt-8">
        <Input.Search
          For="location_search"
          value={searchValue}
          getValue={(value) => setSearchValue(value)}
        />

        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <p className="font-body text-label-3 font-medium">Selected</p>
          {/* Holds the active country */}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral-300" />
      </div>

      <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
        <p className="font-body text-label-3 font-medium">Other</p>
        <ul className="grid h-full w-full grid-cols-1 grid-rows-1 gap-y-4">
          {countryList?.map((country) => {
            return (
              <LocationListItem
                key={country.id}
                name={country.name}
                flag={country.flagURL}
                activeLocation={userLocation}
                getLocation={(country) => setLocation(country)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
