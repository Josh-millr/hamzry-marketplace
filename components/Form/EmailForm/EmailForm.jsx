import { Input, Button, RiArrowRightLine } from "@components/index";

export const EmailForm = ({
  value,
  status,
  emailTaken,
  emailValid,
  submitAction,
  getInputValue,
}) => {
  const submitForm = (e) => {
    e.preventDefault();
    submitAction();
  };

  const helpers = {
    emailTaken: {
      isActive: emailTaken,
      alert: "warning",
      text: "This email address is already taken, try another email address",
    },
    formatIncorrect: {
      isActive: emailValid,
      alert: "warning",
      text: "The email format is incorrect, use a correct email format",
    },
  };

  let helper =
    (emailValid === false && helpers.formatIncorrect) ||
    (emailTaken === true && helpers.emailTaken);

  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 grid-rows-1 justify-items-center gap-y-4 "
      onSubmit={submitForm}
    >
      <Input.Text
        Type="text"
        value={value}
        required={true}
        State="warning"
        disabled={status}
        Label="Email Address"
        HelperText={helper}
        Placeholder="email@gmail.com"
        getValue={(value) => getInputValue(value)}
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
