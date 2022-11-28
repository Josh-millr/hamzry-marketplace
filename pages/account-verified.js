import { Button } from "@components/index";
import { useRouter } from "next/router";

export default function AccountVerified() {
  const router = useRouter();

  return (
    <div className="m-auto w-full pt-16">
      <div className="grid w-full max-w-md grid-cols-1 grid-rows-1 justify-items-center gap-y-12">
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-1">
          <h1 className="text-center font-heading text-h4-mobile font-bold text-neutral-900 tablet:text-h5-desktop">
            Verification Successful!
          </h1>
          <p className="text-center font-body text-label-4 font-medium text-neutral-500">
            The email linked to your account have been successfull verififed.
          </p>
        </div>
        <Button.Default
          Size="lg"
          Type="button"
          Label="Continue"
          Appearance="primary"
          overideStyle="w-full"
          Action={() => router.push("/sign-in")}
        />
      </div>
    </div>
  );
}
