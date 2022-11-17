import Image from "next/image";
import { Button } from "@components/index";

export const TopNav = () => (
  <nav>
    <div className="border-b border-gray-200 font-body">
      <div className="m-auto flex w-full max-w-screen-desktop justify-center  py-4 px-6 tablet:justify-between tablet:px-20">
        <Image src="/logo-full.png" height={40} width={132} alt="hamzry logo" />
        <div className="hidden items-center gap-x-6 tablet:flex">
          <p className="text-label-3 whitespace-nowrap">Already have an account?</p>
          <Button.Default type="secondary" size="lg">
            Sign in
          </Button.Default>
        </div>
      </div>
    </div>
  </nav>
);
