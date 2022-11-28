// React & Custom Hooks
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useForm } from "@hooks/useForm";

import { EmailForm, PasswordForm } from "@components/index";

export default function SignIn() {
  const [step, setStep] = useState(0);
  const formHandler = useForm();

  const { loading } = useSelector((state) => state.general);

  const stepHandler = useMemo(() => {
    return {
      nextStep: 1,
      goNextStep() {
        setStep(this.nextStep);
      },
    };
  }, []);

  if(formHandler.emailTakenConditionToProceed === false){
    formHandler.setEmailTakenConditionToProceed(true);
  }
  
  useEffect(() => {
    if (formHandler.isEmailTaken === true) stepHandler.goNextStep();
  }, [formHandler, stepHandler]);

  const components = [
    <EmailForm
      key={0}
      emailValue={formHandler.email}
      // isDisabled={loading}
      errorMessage={formHandler.emailError}
      showErrorMessage={formHandler.showEmailError}
      submitEmail={() => formHandler.processEmail()}
      hideEmailErrorMessage={() => formHandler.clearEmailErrorMessage()}
      getEmailValue={(value) => formHandler.getEmailValue(value)}
      signinWithGoogle={() => formHandler.signinWithGoogle()}
    />,
    <PasswordForm
      key={1}
      value={formHandler.password}
      isDisabled={loading}
      submitAction={() => formHandler.processSignin()}
      getInputValue={(value) => formHandler.setPassword(value)}
    />,
  ];

  return (
    <div className="w-full pt-16">
      {/* Form Section */}
      <div className="grid w-full grid-cols-1 grid-rows-1 place-items-center gap-y-9 tablet:gap-y-16 desktop:gap-y-20">
        <div className="grid max-w-sm grid-cols-1 grid-rows-1 gap-y-1">
          <h1 className="text-center font-heading text-h4-mobile font-bold text-neutral-900 tablet:text-h5-desktop">
            Sign In to Hamzry
          </h1>
          <p className="text-center font-body text-label-4 font-medium text-neutral-500">
            We have +500 New GIGs and +200 New Jobs for you to choose from
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
