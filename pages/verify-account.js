import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { RiEditBoxLine, Input, Button, RiCheckLine } from "@components/index";

import { actions as userAction } from "@store/slice/userSlice/userReducer";
import { actions as generalAction } from "@store/slice/generalSlice/generalReducer";

export default function VerifyAccount() {
  const [verificationCode, setVerificationCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [changeEmail, setChangeEmail] = useState(false);

  const dispatch = useDispatch();

  const { userLocation, userEmail } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.general);

  console.log(userEmail);

  useEffect(() => {
    if (changeEmail === false && newEmail.length > 1)
      dispatch(userAction.setEmail(newEmail));

    //   Write a condition and send newEmail
    if (changeEmail === false && userEmail !== newEmail && newEmail.length > 1)
      dispatch(userAction.setEmail(newEmail));
  }, [dispatch, newEmail, changeEmail, userEmail]);

  const handleVerification = {
    processVerification() {
      dispatch(generalAction.startLoading());

      if (verificationCode.length > 1) {
        this.sendVerification().then((response) => {
          dispatch(generalAction.stopLoading());
          console.log(response);
        });
      }
    },
    async sendVerification() {
      try {
        console.log("Sending verification code to server...");
        let response = await axios.post("http://localhost:3000/users/verify", {
          Temp_code: verificationCode,
        });
        return response.data.status;
      } catch (e) {
        // Return a null value to use in notifying the use of network unavailability
        return "No network";
      }
    },
  };

  return (
    <div className="m-auto w-full pt-16">
      <div className="grid w-full max-w-md grid-cols-1 grid-rows-1 justify-items-center gap-y-8">
        <div className="grid w-full grid-cols-1 grid-rows-1 justify-items-center gap-y-6">
          <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-1">
            <h1 className="text-center font-heading text-h4-mobile font-bold text-neutral-900 tablet:text-h5-desktop">
              Verification Code Sent
            </h1>
            <p className="text-center font-body text-label-4 font-medium text-neutral-500">
              A verification code has been sent to the email inbox below
            </p>
          </div>
          <div
            className={`${changeEmail === false && "rounded-full"} ${
              changeEmail === true && "rounded-2xl"
            }  w-full  bg-neutral-50 px-4 py-2`}
          >
            {/* ........................... */}
            {changeEmail === false && (
              <div
                onClick={() => setChangeEmail(true)}
                className="flex w-full cursor-pointer justify-center gap-x-2"
              >
                <p className="font-body text-label-3 font-medium text-neutral-900">
                  {userEmail}
                </p>
                <RiEditBoxLine size={20} />
                <div></div>
                {/* Icon */}
              </div>
            )}
            {/* ........................... */}
            {changeEmail === true && (
              <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2">
                <div className="w-full">
                  <p className="font-body text-label-4 text-neutral-400">
                    Previous Email Address
                  </p>
                  <p className="font-body text-label-3 font-medium text-neutral-500">
                    {userEmail}
                  </p>
                </div>{" "}
                {/* Divider */}
                <span className="h-[1px] w-full bg-neutral-200" />
                <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2">
                  <div className="flex w-full items-center justify-between">
                    <p className="font-body text-label-3 font-medium text-neutral-600">
                      New Email Address
                    </p>
                    <div
                      className="focus:cursor-pointer"
                      onClick={() => setChangeEmail(false)}
                    >
                      <RiCheckLine size={24} />
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      className="h-8 w-full rounded-full border border-neutral-200 px-3 font-body text-label-3 outline-none hover:border-primary-50 focus:border-2 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-0"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleVerification.processVerification();
          }}
          className="grid w-full grid-cols-1 grid-rows-1 gap-y-4"
        >
          <Input.Text
            Label="Verification Code"
            Placeholder="verification code"
            Type="text"
            For="verification_code"
            Disabled={loading}
            required={true}
            value={verificationCode}
            getValue={(value) => setVerificationCode(value)}
          />
          <div className="grid w-full grid-cols-2 grid-rows-1 gap-x-4 tablet:grid-cols-2">
            <Button
              Size="lg"
              Type="button"
              Label="Skip for now"
              Appearance="secondary"
              overideStyle="w-full"
            />
            <Button
              Size="lg"
              Type="submit"
              Label="Verify"
              Appearance="primary"
              overideStyle="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
