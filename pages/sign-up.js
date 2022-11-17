import React, { useState, useEffect } from "react";
import { EmailForm, GeneralSignupForm } from "@components/index";
import axios from "axios";

export default function SignUp() {
  // Step 1 state
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isEmailFormatValid, setIsEmailFormatValid] = useState(null);
  
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
      if (isEmailValid === false) setIsEmailFormatValid(true);

      // check if email is already present on server
      const isEmailPresent = this.checkEmailRecord();
      if (isEmailPresent) this.submitEmail();
    },
    getEmailValue(value) {
      console.log(value);
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

      // Send the email to the server endpoint
      // axios
      //   .post("/", {
      //     email: email,
      //   })
      //   .then((response) => {
      // get a respose
      // response = response.data;
      // console.log(response.data);

      // return the boolean of the response
      // const isResponse = response === true ? true : false
      //     return true;
      //   })
      //   .catch((error) => {
      //     console.log(error, "No network");
      //   });
    },
    submitEmail() {
      // Send the email to the server endpoint
      // axios
      //   .post("/", {
      //     email: email,
      //   })
      //   .then(function (response) {
      //      get a respose
      //     console.log(response.data);

      //      move to the next step
      //     setStep(stepHandler.goNextStep());
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      console.log("Email Submitted");
      stepHandler.goNextStep();
    },
  };

  const components = [
    <EmailForm
      key={0}
      value={email}
      emailValidated={isEmailFormatValid}
      getInputValue={(value) => emailHandler.getEmailValue(value)}
      submitAction={() => emailHandler.processEmail()}
    />,
    <GeneralSignupForm key={1} />,
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

// Step 2 state
// const [gender, setGender] = useState(null);
// const [location, setLocation] = useState(null);
// const [userName, setUserName] = useState(null);
// const [password, setPassword] = useState(null);
// const [lastName, setLastName] = useState(null);
// const [firstName, setFirstName] = useState(null);
// const [accountType, setAccountType] = useState(null);
