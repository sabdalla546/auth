import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}
export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 text-destructive p-3 rounded-ms flex items-center justify-center gap-x-2 text-sm">
      <ExclamationTriangleIcon />
      <p>{message}</p>
    </div>
  );
};
