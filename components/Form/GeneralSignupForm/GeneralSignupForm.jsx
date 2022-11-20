import { Input, Button, ToggleButton, DropdownSelect } from "@components/index";

export const GeneralSignupForm = ({
  setAccountType,
  accountType,
  // Firstname
  setFirstName,
  getFirstName,
  // Lastname
  setLastName,
  getLastName,
  // Gender
  getGender,
  // Username
  getUserName,
  setUserName,
  // Location
  setLocation,
  // Password
  getPassword,
  setPassword,
}) => {
  const toggleButton = (identity) => {
    switch (identity) {
      case "business":
        setAccountType(identity);
        break;
      case "individual":
        setAccountType(identity);
        break;
      default:
        break;
    }
  };
  return (
    <form className="mb-28 grid w-full max-w-3xl grid-cols-1 grid-rows-1 gap-y-6 text-neutral-800 tablet:px-20">
      <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
        <p className="font-body text-label-3 font-medium">Account</p>
        <div className="flex gap-x-4">
          <ToggleButton
            identity="business"
            isActive={accountType}
            setActive={(value) => toggleButton(value)}
          />
          <ToggleButton
            identity="individual"
            isActive={accountType}
            setActive={(value) => toggleButton(value)}
          />
        </div>
      </div>
      {/* Form Inputs */}
      <div className="grid w-full grid-cols-2 grid-rows-1 gap-x-4 gap-y-2">
        <Input.Text
          Type="text"
          value={setFirstName}
          required={true}
          Label="Firstname"
          For="firstname"
          Placeholder="Firstname"
          getValue={(value) => getFirstName(value)}
        />
        <Input.Text
          Type="text"
          value={setLastName}
          required={true}
          Label="Lastname"
          For="lastname"
          Placeholder="Lastname"
          getValue={(value) => getLastName(value)}
        />
        <DropdownSelect
          Label="Gender"
          Placeholder="Choose gender"
          For="gender_picker"
          Options={["Male", "Female"]}
          getValue={(value) => getGender(value)}
        />
        {/* Location picker goes here */}
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2 tablet:max-w-[328px]">
          <label
            htmlFor="location"
            className="w-full whitespace-nowrap font-body text-label-3 font-medium"
          >
            Location
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              id="location"
              name="location"
              defaultValue={
                setLocation.length > 1 ? setLocation : "Choose location"
              } // Dexter, ad location value here
              required={true}
              type="text"
              readOnly
              onClick={() => console.log("Just clicked the location input!")}
              className="text-sm block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
              placeholder="name@flowbite.com"
            />
          </div>
          {/* {typeof HelperText === "string" && HelperText.length > 2 && (
            <div className="flex items-center gap-x-1">
              {returnStatusIcon(State)}
              <p className="font-body text-label-4">{HelperText}</p>
            </div>
          )} */}
        </div>

        <Input.Text
          Type="text"
          For="username"
          required={true}
          Label="Username"
          value={setUserName}
          Placeholder="Username"
          getValue={(value) => getUserName(value)}
        />

        <Input.Text
          Type="password"
          For="password"
          required={true}
          Label="Password"
          value={setPassword}
          Placeholder="Password"
          getValue={(value) => getPassword(value)}
        />
      </div>
      {/* Continue Button */}
      <div className="grid grid-cols-1 grid-rows-1 gap-4 tablet:grid-cols-2">
        <Button
          Size="lg"
          Appearance="secondary"
          Type="button"
          Label="Continue as a freelancer"
          overideStyle="w-full"
        />
        <Button
          Size="lg"
          Appearance="primary"
          Type="submit"
          Label="Sign up"
          overideStyle="w-full"
        />
      </div>
    </form>
  );
};
