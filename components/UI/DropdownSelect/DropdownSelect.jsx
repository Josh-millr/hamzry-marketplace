export const DropdownSelect = ({
  Label,
  For,
  Placeholder,
  Options,
  getValue,
}) => {
  const options = Options.map((option) => (
    <option
      key={option}
      value={option}
      onClick={(e) => getValue(e.target.value)}
    >
      {option}
    </option>
  ));

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-2 tablet:max-w-[328px]">
      <label
        htmlFor={For}
        className="w-full whitespace-nowrap font-body text-label-3 font-medium"
      >
        {typeof Label === "string" && Label.length > 2 ? Label : "Label"}
      </label>
      <select
        id={For}
        className="block font-body text-label-3 w-full rounded-lg border h-12 border-gray-300 bg-white text-neutral-900 focus:border-primary-500 focus:ring-primary-500 disabled:border-neutral-200 disabled:bg-white disabled:text-neutral-200"
      >
        <option defaultValue={Placeholder}>
          {typeof Placeholder === "string" && Placeholder.length > 2
            ? Placeholder
            : "Add placeholder"}
        </option>
        {options}
      </select>
    </div>
  );
};
