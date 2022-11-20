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
        {/* 
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Gender</label>
          <Input.Text />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Location</label>
          <Input.Text />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Username</label>
          <Input.Text placeholder="username" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Password</label>
          <Input.Text />
        </div> */}
      </div>
      {/* Continue Button */}
      {/* <div className="flex gap-x-4">
        <button className="h-fit w-full whitespace-nowrap rounded-lg border border-neutral-300 py-2 font-body text-label-3 font-medium">
          Continue as a freelancer
        </button>
        <Button.Default size="lg" type="primary">
          Sign up
        </Button.Default>
      </div> */}
    </form>
  );
};
