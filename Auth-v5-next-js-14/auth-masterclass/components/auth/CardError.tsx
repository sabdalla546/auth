import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export const CardError = () => {
  return (
    <CardWrapper
      headerLabel="Oops! sumething want wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive w-10 h-10" />
      </div>
    </CardWrapper>
  );
};
