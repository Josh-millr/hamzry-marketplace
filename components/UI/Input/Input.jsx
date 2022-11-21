import {
  RiSpam2Fill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from "@components/index";

const returnStatusIcon = (status) => {
  switch (status) {
    case "success":
      return <RiCheckboxCircleFill size={16} />;
      break;
    case "warning":
      return <RiErrorWarningFill size={16} />;
      break;
    case "error":
      return <RiSpam2Fill size={16} />;
      break;

    default:
      return <RiInformationFill size={16} />;
      break;
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
          className={`${IconLeft !== undefined && "pl-10"} ${IconRight !== undefined && "pr-10"}
          block w-full rounded-lg border border-neutral-300 p-3 font-body text-label-3 text-neutral-900 placeholder:text-label-3 placeholder:text-neutral-500 hover:border-primary-50 hover:bg-primary-max-00 focus:border-2 focus:border-primary-500 focus:bg-white focus:outline-0 focus:ring-0 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-200`}
        />
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {IconRight !== undefined && <IconRight size={20} />}
        </div> */}
      </div>
      {typeof HelperText === "string" && HelperText.length > 2 && (
        <div className="flex items-center gap-x-1">
          {returnStatusIcon(State)}
          <p className="font-body text-label-4">{HelperText}</p>
        </div>
      )}
    </div>
  );
};

export const Input = {
  Text: Text,
};
