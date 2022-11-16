import React, { useState, useEffect } from "react";
import { EmailForm, GeneralSignupForm } from "@components/index";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [accountType, setAccountType] = useState(null);

  const prevStep = step;
  const nextStep = step + 1;

  // useEffect(() => {
  //   if (prevStep !== nextStep) {
  //     setTimeout(() => setStep(nextStep), 4000);
  //   }
  // }, [nextStep, prevStep]);

  const components = [
    <EmailForm key={prevStep} />,
    <GeneralSignupForm key={prevStep} />,
  ];

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
        {/* Mount steps */}
        {/* // todo: Add a transition to control the vistual display of the components at each step */}
        <div className="transitionWrapper mx-auto flex h-fit w-full place-content-center">
          {components[step]}
        </div>
      </div>
    </div>
  );
}

// {/* {prevStep === nextStep ? components[nextStep] : components[prevStep]} */}
