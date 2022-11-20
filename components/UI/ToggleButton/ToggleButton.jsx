export const ToggleButton = ({ isActive, setActive, identity }) => {
  return (
    <button
      type="button"
      onClick={() => isActive !== identity && setActive(identity)}
      className={`${
        isActive === identity &&
        "border-primary-600 bg-primary-50 text-primary-900"
      }
        h-fit w-full whitespace-nowrap rounded-lg border 
        ${isActive !== identity && "border-neutral-100"} 
        py-2 font-body text-label-3 font-medium`}
    >
      {identity.charAt(0).toUpperCase() + identity.slice(1)}
    </button>
  );
};
