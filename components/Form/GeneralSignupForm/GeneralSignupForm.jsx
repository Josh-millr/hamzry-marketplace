import { Input } from "@components/index";

export const GeneralSignupForm = ({ getInput }) => {
  return (
    <form className="grid w-full max-w-sm grid-cols-1 grid-rows-1 gap-y-6 text-neutral-800">
      <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
        <p className="font-body text-label-3 font-medium">Account</p>
        <div className="flex gap-x-4">
          <button className="h-fit w-full whitespace-nowrap rounded-lg border border-neutral-300 py-2 font-body text-label-3 font-medium">
            For Individual
          </button>
          <button className="h-fit w-full whitespace-nowrap rounded-lg border border-neutral-300 py-2 font-body text-label-3 font-medium">
            For Business
          </button>
        </div>
      </div>
      {/* Form Inputs */}
      <div className="grid w-full grid-cols-2 grid-rows-1 gap-x-4 gap-y-2">
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">
            Firstname
          </label>
          <Input.Text placeholder="firstname" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Lastname</label>
          <Input.Text placeholder="lastname" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Gender</label>
          <Input.Text />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Location</label>
          <Input.Text />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Username</label>
          <Input.Text placeholder="username" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-2">
          <label className="font-body text-label-3 font-medium">Password</label>
          <Input.Text />
        </div>
      </div>
    </form>
  );
};
