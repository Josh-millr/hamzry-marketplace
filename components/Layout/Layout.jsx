import { Footer, TopNav, Loader, Drawer } from "@components/index";

import { useSelector } from "react-redux";

export const Layout = ({ children }) => {
  const { isModalOpen } = useSelector((state) => state.general);

  return (
    <>
      <Loader />
      <TopNav />
      <div className="flex">
        {isModalOpen && <Drawer.Side />}
        <div className="mx-auto flex w-full max-w-screen-desktop justify-center px-6 desktop:px-0">
          <main>{children}</main>
        </div>
        {isModalOpen && <Drawer.Bottom />}
      </div>
      <Footer />
    </>
  );
};
