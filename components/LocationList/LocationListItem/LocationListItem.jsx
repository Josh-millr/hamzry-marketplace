import { RiCheckboxCircleLine, RiCheckboxCircleFill } from "@components/index";

export const LocationListItem = ({
  name,
  flag,
  getLocation,
  activeLocation,
}) => {
  return (
    <div
      className="flex h-fit w-full justify-center gap-x-1 cursor-pointer"
      onClick={() => getLocation({name:name, image:flag})}
    >
      <div className="flex h-fit w-full gap-x-2">
        <img className="h-6 w-6 rounded-full" src={flag} alt={`${name} logo`} />
        <p className="font-body text-label-3 text-neutral-900">{name}</p>
      </div>
      {activeLocation.name !== name && <RiCheckboxCircleLine size={20} />}
      {activeLocation.name === name && <RiCheckboxCircleFill size={20} />}
    </div>
  );
};
