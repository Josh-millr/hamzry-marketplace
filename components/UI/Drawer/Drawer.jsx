import { useSelector } from "react-redux";
import { LocationList } from "@components/index";

const SideDrawer = () => {
  const { isLocationSearchOpen } = useSelector((state) => state.general);

  return (
    <div className="hidden h-screen w-3/12 overflow-y-scroll px-4 pt-8 desktop:block">
      {isLocationSearchOpen && <LocationList />}
    </div>
  );
};

export const Drawer = {
  Side: SideDrawer,
};
