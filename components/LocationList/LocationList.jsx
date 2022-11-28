import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LocationListItem } from "@components/index";
import { userActions } from "@store/slice/userSlice/userReducer";
import { Input } from "@components/index";

export const LocationList = () => {
  const [tempQueryList, setTempQueryList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { userLocation } = useSelector((state) => state.user);
  const { countryList } = useSelector((state) => state.general);

  const dispatch = useDispatch();

  console.log(tempQueryList);

  useEffect(() => {
    if (searchValue.length > 0) {
      console.log(searchValue);

      let queryList = countryList.filter((location) => {
        return location.name.slice(0, searchValue.length) === searchValue;
      });
      setTempQueryList(queryList);
      // console.log(queryList)
    }
  }, [searchValue, countryList]);

  const setLocation = (country) => {
    // dispatch the location with the payload country to be stored in the state.
    dispatch(userActions.setCountry(country));
  };
  console.log(userLocation);
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-y-6">
      <div className="sticky top-0 grid w-full grid-cols-1 grid-rows-1 gap-y-6 bg-white pt-8">
        <Input.Search
          For="location_search"
          value={searchValue}
          getValue={(value) => {
            // Sring capitalize functionality
            let capitalized = value.charAt(0).toUpperCase() + value.slice(1);
            setSearchValue(capitalized);
          }}
          closePanel={() => dispatch(loca)}
        />

        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <p className="font-body text-label-3 font-medium">Selected</p>
          {Object.keys(userLocation).length > 1 &&
            [userLocation].length > 0 &&
            [userLocation]?.map((country) => {
              return (
                <LocationListItem
                  key={country.name}
                  name={country.name}
                  flag={country.image}
                  activeLocation={userLocation}
                  getLocation={(country) => setLocation(country)}
                />
              );
            })}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral-300" />
      </div>

      <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
        <p className="font-body text-label-3 font-medium">Other</p>
        <ul className="grid h-full w-full grid-cols-1 grid-rows-1 gap-y-4">
          {searchValue.length > 0 &&
            tempQueryList?.map((country) => {
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
          {searchValue.length === 0 &&
            countryList?.map((country) => {
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
