import { Input, Button, RiArrowRightLine } from "@components/index";

export const EmailForm = ({
  getInputValue,
  value,
  submitAction,
  emailTaken,
  emailValid,
}) => {
  const submitForm = (e) => {
    e.preventDefault();
    submitAction();
  };

  const helperTexts = {
    default: "",
    emailTaken:
      "This email address is already taken, try another email address",
    formatIncorrect:
      "The email format is incorrect, use a correct email format",
  };

  let helperText =
    (emailValid === null && helperTexts.default) ||
    (emailValid === false && helperTexts.formatIncorrect) ||
    (emailTaken === true && helperTexts.emailTaken);

  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 grid-rows-1 justify-items-center gap-y-4 "
      onSubmit={submitForm}
    >
      <Input.Text
        Type="text"
        value={value}
        required={true}
        Status="success"
        Label="Email Address"
        Placeholder="email@gmail.com"
        getValue={(value) => getInputValue(value)}
        HelperText={emailValid !== null || (emailTaken !== null && helperText)}
      />

      {/* Button used to continue to the next step */}
      <div className="w-full tablet:px-6">
        <Button
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

      {/* Sign up with Google button */}
      <div className="w-full tablet:px-6">
        <Button
          Size="lg"
          Type="submit"
          Label="Continue with Google"
          Appearance="secondary"
          overideStyle="w-full"
        />
      </div>
    </form>
  );
};
