// React & Custom Hooks
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "@hooks/useForm";

import * as thunk from "@store/slice/generalSlice/generalThunk";
import { generalActions } from "@store/slice/generalSlice/generalReducer";
import { userActions } from "@store/slice/userSlice/userReducer";

import { EmailForm, GeneralSignupForm } from "@components/index";

export default function SignUp() {
  // Step 1 state
  const [step, setStep] = useState(0);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    loading,
    countryList,
    countryListStatus,
    isLocationSearchOpen,
    isModalOpen,
  } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const router = useRouter()
  const formHandler = useForm();

  const { userLocation } = useSelector((state) => state.user);

  const stepHandler = useMemo(() => {
    return {
      nextStep: 1,
      goNextStep() {
        setStep(this.nextStep);
      },
    };
  }, []);

  if(formHandler.emailTakenConditionToProceed === true){
    formHandler.setEmailTakenConditionToProceed(false);
  }

  useEffect(() => {

    switch(formHandler.signupStatus){
      case "Registration Successful!":
        dispatch(userActions.setEmail(formHandler.email))
        router.push("/verify-account")
        break;
      default:
        console.log("no signup status")
        break;
    }

    if (formHandler.isEmailTaken === false) stepHandler.goNextStep();

    if (countryList.length > 1) formHandler.setLocation(userLocation);
    if (countryListStatus === "idle" && countryList.length === 0)
      dispatch(thunk.getCountryList());

    // Make the drawer visible to for users to see the location search & list
    if (isLocationSearchOpen === true && isModalOpen === false)
      dispatch(generalActions.openModal());
    if (isLocationSearchOpen === false && isModalOpen === true)
      dispatch(generalActions.closeModal());

  }, [
    stepHandler,
    formHandler,
    isModalOpen,
    countryListStatus,
    dispatch,
    countryList,
    isLocationSearchOpen,
    userLocation,
    router,
  ]);

  const locationHandler = {
    processLocation() {
      if (isLocationSearchOpen === false)
        dispatch(generalActions.openLocationSearch());
    },
  };

  const components = [
    <EmailForm
      key={0}
      emailValue={formHandler.email}
      isDisabled={loading}
      errorMessage={formHandler.emailError}
      showErrorMessage={formHandler.showEmailError}
      submitEmail={() => formHandler.processEmail()}
      hideEmailErrorMessage={() => formHandler.clearEmailErrorMessage()}
      getEmailValue={(value) => formHandler.getEmailValue(value)}
      signinWithGoogle={() => formHandler.signinWithGoogle()}
    />,
    <GeneralSignupForm
      key={1}
      setAccountType={(value) => formHandler.setAccountType(value)}
      accountType={formHandler.accountType}
      // Firstname
      getFirstName={formHandler.setFirstName}
      setFirstName={formHandler.firstName}
      // Lastname
      getLastName={formHandler.setLastName}
      setLastName={formHandler.lastName}
      // Gender
      getGender={formHandler.setGender}
      // Username
      getUserName={formHandler.setUserName}
      setUserName={formHandler.userName}
      // Location
      setLocation={formHandler.location}
      getLocation={() => locationHandler.processLocation()}
      // Password
      setPassword={formHandler.password}
      getPassword={formHandler.setPassword}
      isShowPassword={isShowPassword}
      setIsShowPassword={(value) => setIsShowPassword(value)}
      // Error hander
      hideEmailErrorMessage={() => formHandler.clearEmailErrorMessage()}
      isDisabled={loading}
      errorMessage={formHandler.emailError}
      showErrorMessage={formHandler.showEmailError}
      // SubmitForm
      submitAction={() => formHandler.processSignup()}
    />,
  ];

  return (
    <div className="w-full pt-16">
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
