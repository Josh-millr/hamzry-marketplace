import Image from "next/image";

export const TopNav = () => (
  <nav>
    <div className="flex w-full justify-center border border-gray-200 py-4 tablet:justify-between">
      <Image src="/logo-full.png" height={40} width={132} alt="hamzry logo" />
      <div className="hidden items-center gap-x-6 tablet:flex">
        <p className="text-sm">Already have an account?</p>
        <button className="">Sign in</button>
      </div>
    </div>
  </nav>
);
