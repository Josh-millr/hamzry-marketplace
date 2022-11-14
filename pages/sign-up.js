import React, { useState } from "react";
import { Input, Button } from "@components/index";

const EmailForm = () => {
  const [email, setEmail] = useState(null);

  const getEmailValue = (value) => setEmail(value);

  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 grid-rows-1 gap-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Email Input section */}
      <div className="grid grid-cols-1 grid-rows-1 gap-y-4">
        {/* Email Input */}
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label
            htmlFor="email"
            className="whitespace-nowrap font-body text-label-3 font-medium text-neutral-900"
          >
            Email Address
          </label>
          <Input.Email required={true} getValue={getEmailValue} />
        </div>
        {/* Continue Button */}
        <Button.Default size="lg" type="primary">
          Continue
        </Button.Default>
      </div>
      {/* Divider */}
      <div className="flex w-full place-items-center gap-x-4">
        <span className="h-[1px] w-full bg-neutral-200" />
        <p className="font-body text-label-4 text-neutral-400">OR</p>
        <span className="h-[1px] w-full bg-neutral-200" />
      </div>
      {/* Signup with Google button */}
      <Button.WithGoogle>Continue with Google</Button.WithGoogle>
    </form>
  );
};

export default function SignUp() {
  return (
    <div className="w-full px-6 pt-16">
      {/* Form Section */}
      <div className="grid w-full grid-cols-1 grid-rows-1 place-items-center gap-y-9 tablet:gap-y-16 desktop:gap-y-20">
        <div className="grid max-w-sm grid-cols-1 grid-rows-1 gap-y-1">
          <h1 className="text-center font-heading text-h4-mobile font-bold text-neutral-900 tablet:text-h5-desktop">
            Create an Account on Hamzry
          </h1>
          <p className="text-center font-body text-label-4 font-medium text-neutral-500">
            Join 50k people making money and completing GIGs on Hamzry for free.
            Get Started Now
          </p>
        </div>

        {/* Email Form Below */}
        <EmailForm />
      </div>
    </div>
  );
}
