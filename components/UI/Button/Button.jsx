export const Button = ({
  size,
  type,
  iconRight: IconRight,
  iconLeft: IconLeft,
  children,
  state,
}) => {
  // "tablet:w-auto"
  const style = {
    general: "flex place-content-center rounded-lg text-button w-auto",
    size: {
      lg: "px-4 py-2 font-semibold",
    },
    type: {
      primary:
        "text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-400 focus:outline-none",
      secondary:
        "text-primary-600 border-2 border-primary-600 hover:bg-primary-max-00 focus:outline-none",
      tertiary:
        "bg-primary-50 text-primary-900 hover:bg-primary-200 focus:outline-none",
    },
    state: {
      error:
        "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
      warning:
        "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900",
      disabled:
        "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium text-sm px-5 py-2.5 text-center",
    },
  };

  const iconSize = {
    lg: 24,
    md: 20,
    sm: 20,
  };
  
  return (
    <button
      type="button"
      className={` ${style["general"]}
        ${style["size"][size] !== undefined ? style["size"][size] : ""}
        ${style["type"][type] !== undefined ? style["type"][type] : ""}
        ${style["state"][state] !== undefined ? style["state"][state] : ""}
      `}
    >
      {IconLeft !== undefined && <IconLeft size={iconSize[size]} />}
      {children}
      {IconRight !== undefined && <IconLeft size={iconSize[size]} />}
    </button>
  );
};
