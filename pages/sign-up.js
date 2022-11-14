export default function SignUp() {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 desktop:grid-cols-2">
      {/* Form Section */}
      <div className="mx-auto h-[100vh]">
        <div className="grid-grid-rows-1 grid-cols-1 place-items-center">
          <div className="max-w-[326px] pt-14">
            <h1 className="text-center text-h4-mobile font-bold text-neutral-900 tablet:text-h5-desktop">
              Create an Account on Hamzry
            </h1>
            <p className="text-center text-label-4 font-medium text-neutral-500">
              Join 50k people making money and completing GIGs on Hamzry for
              free. Get Started Now
            </p>
          </div>
          <form></form>
        </div>
      </div>

      {/* Feature Section */}
      <div className="h-[100vh] bg-primary-700"></div>
    </div>
  );
}
{
  /* <div className="grid grid-cols-1 grid-rows-1 desktop:grid-cols-2">
<div className="grid content-center grid-cols-1 grid-rows-1">
  <div className="grid grid-cols-1 grid-rows-1 gap-y-1">
    <h1 className="text-h4-mobile font-medium text-neutral-900">Create an Account on Hamzry</h1>
    <p className="text-label-4 font-medium text-center text-neutral-500">Join 50k people making money and completing GIGs on Hamzry for free. Get Started Now</p>
  </div>
  <div className="">
    <form></form>
  </div>
</div>
{/* Feature section */
}
