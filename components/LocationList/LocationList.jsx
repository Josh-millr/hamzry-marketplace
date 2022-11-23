import { useSelector, useDispatch } from "react-redux";
import { LocationListItem } from "@components/index";
import { actions } from "@store/slice/userSlice/userReducer";

export const LocationList = () => {
  const { userLocation } = useSelector((state) => state.user);
  const { countryList } = useSelector((state) => state.general);

  const dispatch = useDispatch();

  const setLocation = (country) => {
    // dispatch the location with the payload country to be stored in the state.
    dispatch(actions.setCountry(country));
  };

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 h-full gap-y-4">
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
    </div>
  );
};
