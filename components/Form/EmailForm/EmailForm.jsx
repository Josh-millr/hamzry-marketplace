import axiosConfig from "@utils/axiosConfig";
import { Input, Button, RiArrowRightLine, FcGoogle } from "@components/index";

export const EmailForm = ({
  emailValue,
  getEmailValue,
  isDisabled,
  errorMessage,
  showErrorMessage,
  hideEmailErrorMessage,
  submitEmail,
  signinWithGoogle,
}) => {
  const submitForm = (e) => {
    e.preventDefault();
    submitEmail();
  };

  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 grid-rows-1 justify-items-center gap-y-4"
      onSubmit={submitForm}
    >
      <Input.Text
        label="Email Address"
        inputFor="email"
        placeholder="email@gmail.com"
        Required={true}
        value={emailValue}
        disabled={isDisabled}
        type="text"
        getValue={(value) => getEmailValue(value)}
        errorMessage={errorMessage}
        showErrorMessage={showErrorMessage}
        hideErrorMessage={() => hideEmailErrorMessage()}
      />

      {/* Button used to continue to the next step */}
      <div className="w-full tablet:px-6">
        <Button.Default
          Size="lg"
          Type="submit"
          Label="Continue"
          Appearance="primary"
          overideStyle="w-full"
          IconRight={RiArrowRightLine}
        />
      </div>

      {/* Divider */}
      <div className="w-full tablet:px-6">
        <div className="flex w-full place-items-center gap-x-4">
          <span className="h-[1px] w-full bg-neutral-200" />
          <p className="font-body text-label-4 text-neutral-400">OR</p>
          <span className="h-[1px] w-full bg-neutral-200" />
        </div>
      </div>

      <div className="w-full tablet:px-6">
        <Button.Social
          Size="lg"
          Type="button"
          Icon={FcGoogle}
          Label="Continue with Google"
          overideStyle="w-full"
          Action={() => signinWithGoogle()}
        />
      </div>
    </form>
  );
};
