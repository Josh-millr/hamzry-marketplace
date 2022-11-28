import { useSelector, useDispatch } from "react-redux";
import { generalActions } from "@store/slice/generalSlice/generalReducer";

export const Backdrop = () => {
  const dispatch = useDispatch();
  const { isLocationSearchOpen } = useSelector((state) => state.general);

  const closeModals = () => {
    if (isLocationSearchOpen) dispatch(generalActions.closeLocationSearch());
  };
  return (
    <div
      onClick={() => closeModals()}
      className="fixed top-0 h-screen w-full bg-black opacity-50 z-[1] "
    ></div>
  );
};
