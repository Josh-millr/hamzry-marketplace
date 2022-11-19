import React, { useState, useEffect } from "react";
import axios from "axios";

import { EmailForm, GeneralSignupForm } from "@components/index";

export default function SignUp() {
  // Step 1 state
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isEmailFormatValid, setIsEmailFormatValid] = useState("");
  const [isEmailTaken, setIsEmailTaken] = useState(null);

  // Step 2 state
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [accountType, setAccountType] = useState("");

  const stepHandler = {
    nextStep: 1,
    goNextStep() {
      setStep(this.nextStep);
    },
  };

  const emailHandler = {
    processEmail() {
      // check if email is in a valid format
      const isEmailValid = this.checkEmailFomat();
      if (isEmailValid === false) setIsEmailFormatValid(false);

      // check if email is already present on server
      const isEmailPresent = this.checkEmailRecord();
      if (isEmailPresent === false) {
        stepHandler.goNextStep();
      } else {
        setIsEmailTaken(true);
      }
    },
    getEmailValue(value) {
      // Reset states to default
      if (isEmailFormatValid === false) setIsEmailFormatValid(null);
      if (isEmailTaken === true) setIsEmailTaken(null);

      setEmail(value);
    },
    checkEmailFomat() {
      // email regEx pattern
      const emailRegExPattern = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
      );

      if (emailRegExPattern.test(email)) return true;

      return false;
    },
    checkEmailRecord() {
      const response = true;
      return response;

      // Send the email to the server endpoint axios
      axios
        .post("http://localhost:3001/users/checkemail", {
          email: email,
        })
        .then((response) => {
          // get a respose
          // response = response.data;
          console.log(response);

          // return the boolean of the response
          // const isResponse = response === true ? true : false;
          // return true;
        })
        .catch((error) => {
          console.log(error, "No network");
        });
    },
  };

  const components = [
    <EmailForm
      key={0}
      value={email}
      emailValid={isEmailFormatValid}
      emailTaken={isEmailTaken}
      submitAction={() => emailHandler.processEmail()}
      getInputValue={(value) => emailHandler.getEmailValue(value)}
    />,
    <GeneralSignupForm
      key={1}
      setAccountType={(value) => setAccountType(value)}
      accountType={accountType}
      // firstname
      getFirstname={setFirstName}
      setFirstname={firstName}
    />,
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
        {/* Mount steps - Add a transition to control the vistual display of the components at each step */}
        <div className="transitionWrapper mx-auto flex h-fit w-full place-content-center">
          {step === stepHandler.nextStep
            ? components[stepHandler.nextStep]
            : components[step]}
        </div>
      </div>
    </div>
  );
}
