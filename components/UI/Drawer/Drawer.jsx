import { useSelector } from "react-redux";
import { LocationList } from "@components/index";

const SideDrawer = () => {
  const { isLocationSearchOpen } = useSelector((state) => state.general);

  return (
    <div className="overflow-y-auto sticky top-[73px] hidden h-screen w-5/12  desktop:w-3/12 px-4 pt-8 tablet:block bg-white z-[2]">
      {isLocationSearchOpen && <LocationList />}
    </div>
  );
};

const BottomDrawer = () => {
  const { isLocationSearchOpen } = useSelector((state) => state.general);

  return(
    <div className="block tablet:hidden bg-white absolute w-full px-6 top-[20%] pt-8 rounded-t-[40px] h-screen z-[2]">
      <div className="h-[inherit] overflow-y-auto">
      {isLocationSearchOpen && <LocationList />}
    </div>
    </div>
  )
}
export const Drawer = {
  Side: SideDrawer,
  Bottom: BottomDrawer
};
