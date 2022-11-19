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
      <div className="flex w-full place-items-center gap-x-2">
        {IconLeft !== undefined && <IconLeft size={24} />}
        <input
          id={For}
          name={For}
          value={value}
          required={required}
          type={typeof Type !== "string" ? "text" : Type}
          onChange={(e) => inputHandler(e)}
          placeholder={Placeholder}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-caption text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
        />
        {IconRight !== undefined && <IconRight size={24} />}
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
