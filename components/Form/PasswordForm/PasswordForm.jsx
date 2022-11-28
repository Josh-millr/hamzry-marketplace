import { Input, Button, RiArrowRightLine } from "@components/index";
import React, { useState } from "react";

export const PasswordForm = ({
  value,
  isDisabled,
  submitAction,
  getInputValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    submitAction();
  };

  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 grid-rows-1 justify-items-center gap-y-4"
      onSubmit={submitForm}
    >
      <Input.Password
        type="text"
        value={value}
        required={true}
        disabled={isDisabled}
        label="Password"
        placeholder="Password"
        isShowPassword={showPassword}
        getValue={(value) => getInputValue(value)}
        setIsShowPassword={(value) => setShowPassword(value)}
      />

      {/* Button used to continue to the next step */}
      <div className="w-full tablet:px-6">
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
