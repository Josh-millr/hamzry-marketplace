import { Input, Button } from "@components/index";

export const EmailForm = ({ getInputValue, value, submitAction, emailValidated }) => {
  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 grid-rows-1 gap-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submitAction();
      }}
    >
      {/* Email Input section */}
      <div className="grid grid-cols-1 grid-rows-1 gap-y-4">
        {/* Email Input */}
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label
            htmlFor="email"
            className="whitespace-nowrap font-body text-label-3 font-medium text-neutral-900"
          >
            Email Address
          </label>
          <Input.Email required={true} getValue={getInputValue} value={value} />
        </div>
        {/* Continue Button */}
        <Button.Default size="lg" type="primary">
          Continue
        </Button.Default>
      </div>
      {/* Divider */}
      <div className="flex w-full place-items-center gap-x-4">
        <span className="h-[1px] w-full bg-neutral-200" />
        <p className="font-body text-label-4 text-neutral-400">OR</p>
        <span className="h-[1px] w-full bg-neutral-200" />
      </div>
      {/* Signup with Google button */}
      <Button.WithGoogle>Continue with Google</Button.WithGoogle>
    </form>
  );
};
