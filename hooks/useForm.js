import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosConfig from "@utils/axiosConfig";
import { ERR_NETWORK, ERR_SERVER, ERR_EMAIL } from "@utils/errMessages";

// Redux Action Creators
import { generalActions } from "@store/slice/generalSlice/generalReducer";
import { userActions } from "@store/slice/userSlice/userReducer";

export const useForm = () => {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState({});
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [isAccountVerified, setIsAccountVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("")

  const [emailError, setEmailError] = useState({});
  const [isEmailTaken, setIsEmailTaken] = useState(null);
  const [emailTakenConditionToProceed, setEmailTakenConditionToProceed] = useState(null);
  const [showEmailError, setShowEmailError] = useState(false);
  const [isGoogleSignin, setIsGoogleSignin] = useState(false);
  const [signupStatus, setSignupStatus] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    // For only Email error check state update
    if (emailError?.issue === "Email Format Incorrect" ) setShowEmailError(true);
  
    if (emailError?.issue === "Email Taken" && isEmailTaken !== true ) setIsEmailTaken(true);
    if (emailError?.issue === "Email Not Taken" && isEmailTaken !== false) setIsEmailTaken(false);

    if (
      (emailError?.issue === "Email Not Taken" && isEmailTaken === emailTakenConditionToProceed) ||
      (emailError?.issue === "Email Taken" && isEmailTaken === emailTakenConditionToProceed)
    ) { setShowEmailError(true) }

    return(() => { if (typeof isEmailTaken === "boolean") setIsEmailTaken(null) })

  }, [emailError, isEmailTaken, emailTakenConditionToProceed])
  
  useEffect(() => {
    // For general state update
    if (isGoogleSignin === true) window.open("http://localhost:3000/users/google", "_self")
    
  }, [isGoogleSignin]);


  const formHandler = {
    processEmail() {
      const isEmailFormatValid = this.checkEmailFomat();
      if (isEmailFormatValid === false) {
        return setEmailError(ERR_EMAIL.formatIncorrect);
      }

      dispatch(generalActions.startLoading());

      this.checkEmailRecord().then((emailTakenResponse) => {
        console.log("The server responded with:", emailTakenResponse);

        dispatch(generalActions.stopLoading());

        if (emailTakenResponse === true) return setEmailError(ERR_EMAIL.isEmailTaken);
        if (emailTakenResponse === false) return setEmailError(ERR_EMAIL.isEmailNotaken);

        if (typeof emailTakenResponse !== "boolean") {
          // Handle Error
        }
      });
    },
    getEmailValue(value) {
      // Reset states to default
      if (Object.keys(emailError).length > 1) setEmailError({});

      setEmail(value);
    },
    clearEmailErrorMessage() {
      if (showEmailError === true) setShowEmailError(false);
    },
    checkEmailFomat() {
      const emailRegExPattern = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
      );
      if (emailRegExPattern.test(email)) return true;
      return false;
    },
    async checkEmailRecord() {
      try {
        console.log("Making check email sever request...");
        let response = await axiosConfig.post("/users/checkemail", {
          email: email,
        });

        return response.data.status;
      } catch (error) {
        if (error.request) return ERR_SERVER.noResponse;
        return ERR_NETWORK.noNetwork;
      }
    },
    signinWithGoogle() {
      if (isGoogleSignin === false) setIsGoogleSignin(true);
    },
    processSignin() {
      if (email.length > 1 && password.length > 1) {
        dispatch(generalActions.startLoading());

        this.signin({ email: email, password: password }).then((response) => {
          dispatch(generalActions.stopLoading());
          console.log(response);
        });
      }
    },
    processSignup() {
      if (
        gender.length > 1 &&
        location.name.length > 1 &&
        userName.length > 1 &&
        password.length > 1 &&
        lastName.length > 1 &&
        firstName.length > 1 &&
        accountType.length > 1
      ) {
        const newUserData = {
          firstname: firstName,
          lastname: lastName,
          location: location.name,
          accounttype: accountType,
          gender: gender,
          email: email,
          password: password,
          username: userName,
        };
        console.log("Client Sent:", newUserData);

        this.signup(newUserData).then((response) => {
          console.log("Server Responded:", response);
          dispatch(generalActions.stopLoading());
          setSignupStatus(response)
        });
      }
    },
    async signin(data) {
      try {
        let response = await axiosConfig("/users/login", data);
        return response.data;
      } catch (error) {
        console.log("ERROR!, Could not sign in:", error.request);
      }
    },
    async signup(data) {
      dispatch(generalActions.startLoading());
      try {
        console.log("Sending user data to server...");
        let response = await axiosConfig.post("http://localhost:3000/users/signup", {
          ...data,
        });
        return response.data.status;
      } catch (e) {
        // Return a null value to use in notifying the use of network unavailability
        return "No network";
      }
    },
    processVerification() {
      dispatch(generalActions.startLoading());

      if (verificationCode.length > 1) {
        this.sendVerification().then((response) => {
          dispatch(generalActions.stopLoading());
          console.log(response);
          if (response === "No network") setIsAccountVerified(true)
        });
      }
    },
    async sendVerification() {
      try {
        console.log("Sending verification code to server...");
        let response = await axiosConfig.post("http://localhost:3000/users/verify", {
          tempt_code: verificationCode,
        });
        return response.data.status;
      } catch (e) {
        // Return a null value to use in notifying the use of network unavailability
        return "No network";
      }
    },
  };

  return {
    ...formHandler,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    showEmailError,
    setShowEmailError,
    isGoogleSignin,
    isAccountVerified,
    setIsGoogleSignin,
    isEmailTaken,
    setIsEmailTaken,
    gender,
    setGender,
    location,
    setLocation,
    userName,
    setUserName,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    accountType,
    setAccountType,
    emailTakenConditionToProceed,
    setEmailTakenConditionToProceed,
    verificationCode,
    setVerificationCode,
    signupStatus,
    setSignupStatus
  };
};
