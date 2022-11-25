export const Button = (props) => {
  const { Size, Appearance, Type, Label, Action, Disabled, IconRight, IconLeft, overideStyle } = props;

  const style = {
    base: `flex rounded-lg gap-x-2 font-semibold text-button font-body place-items-center justify-center
    ${typeof overideStyle === "string" ? overideStyle : "w-full tablet:w-fit"}`,
    size: {
      sm: "",
      md: "",
      lg: "h-10 px-4",
    },
    appearance: {
      primary: "bg-primary-500 hover:bg-primary-700 text-white focus:outline-none",
      secondary: "text-primary-600 border-2 border-primary-600 hover:bg-primary-max-00 focus:outline-none",
      tertiary: "bg-primary-50 text-primary-900 hover:bg-primary-200 focus:outline-none",
    },
  };

  const appearanceKeys = Object.keys(style.appearance);
  const sizeKeys = Object.keys(style.size);
  
  const iconSize = Size === "sm" ? 20 : 24

  const execute = () => typeof Action === "function" && Action

  return (
    <button type={Type} onClick={() => execute()} disabled={Disabled}
      className={
        `
        ${style.base}
        ${sizeKeys.includes(Size) && style["size"][Size]}
        ${appearanceKeys.includes(Appearance) && style["appearance"][Appearance]}
        `}>
      {IconLeft !== undefined && <IconLeft size={iconSize} />}
      {Label}
      {IconRight !== undefined && <IconRight size={iconSize} />}
    </button>
  );
};
