// todo: Add more customization to the button component

export const Button = ({
  size,
  type,
  iconRight,
  iconLeft,
  children,
  state,
}) => {
  const style = {
    base: "flex place-content-center gap-2 text-sm font-button font-semibold rounded-lg ",
    size: {
      lg: "px-4 py-2",
      md: "",
      sm: "",
    },
    type: {
      primary: "bg-primary-500 text-white",
      secondary: "border-2 border-primary-500 text-primary-500",
      tertiary: "bg-primary-max-00 text-primary-600",
    },
    state: {
      error: "",
      warning: "",
      loading: "",
      disabled: "",
    },
  };
  return (
    <button
      type="button"
      className={` ${style["base"]}
        ${style["size"][size] !== undefined ? style["size"][size] : ""}
        ${style["type"][type] !== undefined ? style["type"][type] : ""}
        ${style["state"][state] !== undefined ? style["state"][state] : ""}
      `}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};
// hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none
