import { Input, Button } from "@components/index";


export default function SignUp() {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 desktop:grid-cols-2">
      {/* Form Section */}
      <div className="mx-auto h-[100vh]">
        <div className="grid grid-rows-1 grid-cols-1 place-items-center gap-y-10">
          <div className="max-w-[352px] pt-14">
            <h1 className="text-center text-h4-mobile font-bold text-neutral-900 tablet:text-h5-desktop">
              Create an Account on Hamzry
            </h1>
            <p className="text-center text-label-4 font-medium text-neutral-500">
              Join 50k people making money and completing GIGs on Hamzry for
              free. Get Started Now
            </p>
          </div>
          {/* ..................................... */}
          <form
            className="grid grid-cols-1 grid-rows-1 gap-y-2 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grow grid-cols-1 grid-rows-1">
              <label
                htmlFor="email"
                className="mb-2 block whitespace-nowrap text-label-4 font-medium text-neutral-800"
              >
                Email Address
              </label>
              <Input.Email
                required={true}
                // getValue={getValue}
              />
            </div>
            <Button size="lg" type="primary">
              Continue
            </Button>
          </form>
        </div>
      </div>

      {/* Feature Section */}
      <div className="h-[100vh] bg-primary-700">
        
      </div>
    </div>
  );
}
