import {
  RiSpam2Fill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiEyeLine,
  RiEyeOffLine,
} from "@components/index";

const returnStatusIcon = (status) => {
  switch (status) {
    case "success":
      return <RiCheckboxCircleFill size={16} />;
    case "warning":
      return <RiErrorWarningFill size={16} />;
    case "error":
      return <RiSpam2Fill size={16} />;
    default:
      return <RiInformationFill size={16} />;
  }
};

const Text = (props) => {
  const {
    Placeholder,
    Label,
    Type,
    For,
    HelperText,
    IconRight,
    IconLeft,
    State,
    disabled,
    required,
    value,
    getValue,
  } = props;

  const style = {
    context: {
      success: {
        text: "text-success-600",
        border: "border-2 border-success-600",
        bg: "",
      },
      warning: {
        text: "text-warning-600",
        border: "border-2 border-warning-600",
      },
      error: {
        border: "border-2 border-error-700",
        text: "text-error-600",
      },
    },
  };
  const inputHandler = (e) => {
    e.preventDefault;
    getValue(e.target.value);
  };

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2 tablet:max-w-[328px]">
      <label
        htmlFor={For}
        className="w-full whitespace-nowrap font-body text-label-3 font-medium"
      >
        {typeof Label === "string" && Label.length > 2 ? Label : "Label"}
      </label>
      <div className="relative flex w-full place-items-center gap-x-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {IconLeft !== undefined && <IconLeft size={20} />}
        </div>
        <input
          id={For}
          name={For}
          value={value}
          disabled={typeof disabled === "boolean" ? disabled : false}
          required={required}
          type={typeof Type !== "string" ? "text" : Type}
          onChange={(e) => inputHandler(e)}
          placeholder={Placeholder}
          className={`${IconLeft !== undefined && "pl-10"} ${
            IconRight !== undefined && "pr-10"
          }
          ${
            typeof HelperText?.isActive === "boolean" &&
            style["context"][HelperText.alert]["border"]
          }
          block w-full rounded-lg border border-neutral-300 p-3 font-body text-label-3 text-neutral-900 placeholder:text-label-3 placeholder:text-neutral-500 hover:border-primary-50 hover:bg-primary-max-00 focus:border-2 focus:border-primary-500 focus:bg-white focus:outline-0 focus:ring-0 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-200`}
        />
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {IconRight !== undefined && <IconRight size={20} />}
        </div> */}
      </div>
      {typeof HelperText === "object" && HelperText?.text.length > 2 && (
        <div
          className={`${
            style["context"][HelperText.alert]["text"]
          } flex items-center gap-x-1`}
        >
          {returnStatusIcon(HelperText.alert)}
          <p className="font-body text-label-4">{HelperText.text}</p>
        </div>
      )}
    </div>
  );
};

const Password = (props) => {
  const {
    Placeholder,
    Label,
    Type,
    For,
    HelperText,
    IconRight,
    IconLeft,
    State,
    disabled,
    required,
    value,
    getValue,
    isShowPassword,
    setIsShowPassword,
  } = props;

  const toggleVisibility = (value) => {
    console.log(value);
    setIsShowPassword(value);
  };

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2 tablet:max-w-[328px]">
      <label
        htmlFor={For}
        className="w-full whitespace-nowrap font-body text-label-3 font-medium"
      >
        {Label}
      </label>
      <div className="flex h-12 items-center gap-x-2 rounded-lg border border-neutral-300 bg-white pr-3 hover:border-primary-50 hover:bg-primary-max-00 focus:border-2 focus:border-primary-500 focus:bg-white">
        <input
          id={For}
          name={For}
          value={value}
          required={true}
          placeholder={For}
          onChange={(e) => getValue(e.target.value)}
          type={isShowPassword === true ? "text" : "password"}
          className="active:bg-white h-full w-full rounded-lg border-0 bg-transparent font-body text-label-3 text-neutral-900 focus:outline-0 focus:ring-0 "
        />
        {isShowPassword === false && (
          <div onClick={() => toggleVisibility(true)}>
            <RiEyeLine size={20} />
          </div>
        )}
        {isShowPassword === true && (
          <div onClick={() => toggleVisibility(false)}>
            <RiEyeOffLine size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export const Input = {
  Text: Text,
  Password: Password,
};
