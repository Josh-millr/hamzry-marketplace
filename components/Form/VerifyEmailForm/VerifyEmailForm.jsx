import { Button, Input } from "@components/index";

export const VerifyEmailForm = (props) => {
  const {
    errorMessage,
    showErrorMessage,
    isDisabled,
    value,
    hideErrorMessage,
    getValue,
    submitForm,
  } = props;
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
      className="grid w-full grid-cols-1 grid-rows-1 gap-y-4"
    >
      <Input.Text
        type="text"
        required={true}
        isDisabled={isDisabled}
        label="Verification Code"
        errorMessage={errorMessage}
        inputFor="verification_code"
        placeholder="verification code"
        showErrorMessage={showErrorMessage}
        value={value}
        hideErrorMessage={() => hideErrorMessage()}
        getValue={(value) => getValue(value)}
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
  );
};
