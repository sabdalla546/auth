import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSeccessProps {
  message?: string;
}
export const FormSeccess = ({ message }: FormSeccessProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-emerald-500/15 text-emerald-500 p-3 rounded-ms flex items-center justify-center gap-x-2 text-sm">
      <CheckCircledIcon />
      <p>{message}</p>
    </div>
  );
};
