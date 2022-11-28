import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "@hooks/useForm";
import { useSelector } from "react-redux";
import { RiMailCheckLine, Input, Button } from "@components/index";

export default function VerifyAccount() {
  const { userEmail } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.general);

  const router = useRouter();
  const formHandler = useForm();

  useEffect(() => {
    if (formHandler.isAccountVerified === true) {
      router.push("/account-verified");
    }
  }, [formHandler, router]);

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
          <div className="flex w-full justify-center gap-x-2 rounded-full border border-neutral-200 bg-neutral-50 px-8 py-2 tablet:w-fit">
            <RiMailCheckLine size={20} />
            <p className="font-body text-label-3 font-medium text-neutral-900">
              {userEmail}
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formHandler.processVerification();
          }}
          className="grid w-full grid-cols-1 grid-rows-1 gap-y-4"
        >
          <Input.Text
            type="text"
            required={true}
            isDisabled={loading}
            label="Verification Code"
            errorMessage={formHandler.errorMessage}
            inputFor="verification_code"
            placeholder="verification code"
            showErrorMessage={formHandler.showEmailError}
            value={formHandler.verificationCode}
            hideErrorMessage={() => formHandler.clearEmailErrorMessage()}
            getValue={(value) => formHandler.setVerificationCode(value)}
          />
          <div className="grid w-full grid-cols-1 grid-rows-1 gap-x-4 tablet:grid-cols-2">
            <Button.Default
              Size="lg"
              Type="button"
              Label="Skip for now"
              Appearance="secondary"
              overideStyle="w-full"
            />
            <Button.Default
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
