import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@store/slice/index";

import { EmailForm, GeneralSignupForm } from "@components/index";

export default function SignUp() {
  // Step 1 state
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isEmailTaken, setIsEmailTaken] = useState(null);
  const [isEmailFormatValid, setIsEmailFormatValid] = useState(null);

  const generalState = useSelector((state) => state.general);
  const dispatch = useDispatch();

  const stepHandler = {
    nextStep: 1,
    goNextStep() {
      setStep(this.nextStep);
    },
  };

  const emailHandler = {
    processEmail() {
      // Check if email is in a valid format
      const isEmailValid = this.checkEmailFomat();
      if (isEmailValid === false) return setIsEmailFormatValid(false);

      // Check if email is already present on server
      this.checkEmailRecord().then((isEmailTaken) => {
        dispatch(stopLoading());
        console.log("server responded with:", isEmailTaken)
        if (isEmailTaken === true) return setIsEmailTaken(isEmailTaken);
        if (isEmailTaken === false) stepHandler.goNextStep();
        // Do something if network is unavailableb
      });
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
    async checkEmailRecord() {
      dispatch(startLoading());
      try {
        console.log("Making check email sever request...");
        let response = await axios.post(
          "http://localhost:3000/users/checkemail",
          { email: email }
        );
        return response.data.status;
      } catch (e) {
        // Return a null value to use in notifying the use of network unavailability
        return "No network";
      }
    },
  };

  const components = [
    <EmailForm
      key={0}
      value={email}
      emailTaken={isEmailTaken}
      status={generalState.loading}
      emailValid={isEmailFormatValid}
      submitAction={() => emailHandler.processEmail()}
      getInputValue={(value) => emailHandler.getEmailValue(value)}
    />,
    // <GeneralSignupForm
    //   key={1}
    //   setAccountType={(value) => setAccountType(value)}
    //   accountType={accountType}
    // firstname
    //   getFirstname={setFirstName}
    //   setFirstname={firstName}
    // />,
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
// const [gender, setGender] = useState("");
// const [location, setLocation] = useState("");
// const [userName, setUserName] = useState("");
// const [password, setPassword] = useState("");
// const [lastName, setLastName] = useState("");
// const [firstName, setFirstName] = useState("");
// const [accountType, setAccountType] = useState("");
