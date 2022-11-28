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
  getLocation,
  // Password
  getPassword,
  setPassword,
  isShowPassword,
  setIsShowPassword,
  submitAction,
  // Error Handler
  isDisabled,
  errorMessage,
  showErrorMessage,
  hideEmailErrorMessage,
}) => {
  const submitForm = (e) => {
    e.preventDefault();
    submitAction();
  };

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
    <form
      onSubmit={submitForm}
      className="mb-28 grid w-full max-w-3xl grid-cols-1 grid-rows-1 gap-y-6 text-neutral-800 tablet:px-20"
    >
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
          type="text"
          value={setFirstName}
          required={true}
          label="Firstname"
          disabled={isDisabled}
          inputFor="firstname"
          placeholder="Firstname"
          getValue={(value) => getFirstName(value)}
          errorMessage={errorMessage}
          showErrorMessage={showErrorMessage}
          hideErrorMessage={() => hideEmailErrorMessage()}
        />
        <Input.Text
          type="text"
          value={setLastName}
          required={true}
          label="Lastname"
          inputFor="lastname"
          placeholder="Lastname"
          getValue={(value) => getLastName(value)}
          errorMessage={errorMessage}
          showErrorMessage={showErrorMessage}
          hideErrorMessage={() => hideEmailErrorMessage()}
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
          <div
            className={`${Object.keys(setLocation).length > 1 && "relative"}`}
          >
            {Object.keys(setLocation).length > 1 && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                {
                  <img
                    className="h-6 w-6 rounded-full"
                    src={setLocation.image}
                    alt={`${setLocation.name} logo`}
                  />
                }
              </div>
            )}
            <input
              readOnly
              type="text"
              id="location"
              name="location"
              required={true}
              value={typeof setLocation.name !== "undefined" ? setLocation.name : "Choose location"}
              onClick={(e) => {
                e.target.blur();
                getLocation();
              }}
              className={`${
                Object.keys(setLocation).length > 1 && "pl-10"
              } block w-full  rounded-lg border border-neutral-300 bg-white p-3 font-body text-label-3 text-neutral-900 hover:border-primary-50 hover:bg-primary-max-00 focus:border-2 focus:border-primary-500 focus:bg-white focus:outline-0 focus:ring-0`}
            />
          </div>
        </div>

        <Input.Text
          type="text"
          inputFor="username"
          required={true}
          label="Username"
          value={setUserName}
          placeholder="Username"
          getValue={(value) => getUserName(value)}
          errorMessage={errorMessage}
          showErrorMessage={showErrorMessage}
          hideErrorMessage={() => hideEmailErrorMessage()}
        />

        <Input.Password
          isShowPassword={isShowPassword}
          setIsShowPassword={(value) => setIsShowPassword(value)}
          placeholder="Password"
          inputFor="password"
          label="Password"
          value={setPassword}
          getValue={(value) => getPassword(value)}
        />
      </div>
      {/* Continue Button */}
      <div className="grid w-full grid-cols-1 grid-rows-1 ">
        {/* Submit button to process sign up */}
        <Button.Default
          Size="lg"
          Type="submit"
          Label="Sign In"
          Appearance="primary"
          overideStyle="w-full"
        />
      </div>
    </form>
  );
};
