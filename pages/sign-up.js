import React, { useState } from "react";
import { Input, Button } from "@components/index";

export default function SignUp() {
  const [email, setEmail] = useState(null);

  const getEmailValue = (value) => setEmail(value);

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
      </div>
    </div>
  );
}

{
  /* <div className="mx-auto grid h-[100vh] w-full grid-cols-1 grid-rows-1">
{/* Form Section */
}
{
  /* <div className="grid grid-cols-1 grid-rows-1 place-items-center gap-y-10 max-w-[352px] ">
  <div className="pt-14">

  </div>
  <form
    className="grid w-full grid-cols-1 grid-rows-1 gap-y-2"
    onSubmit={(e) => e.preventDefault()}
  >
    <div className="grid grow grid-cols-1 grid-rows-1">
      <label
        htmlFor="email"
        className="mb-2 block whitespace-nowrap text-label-4 font-medium text-neutral-800"
      >
        Email Address
      </label>
      <Input.Email
        required={true}
        // getValue={getValue}
      />
    </div>
    <Button size="lg" type="primary">
      Continue
    </Button>
    <div className="flex w-full justify-center gap-x-8">
      <span className="h-[1px] w-full bg-neutral-300" />
      <p className="text-label-4 text-neutral-300">OR</p>
      <span className="h-[1px] w-full bg-neutral-300" />
    </div>
  </form>
</div>
</div> */
}
