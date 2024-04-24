"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useTransition } from "react";

import { CardWrapper } from "./card-wrapper";
import { NewPasswodSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "./form-error";
import { FormSeccess } from "./form-success";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";

const NewPasswodForm = () => {
  const [isPanding, startTransition] = useTransition();
  const [isError, setIsError] = useState<string | undefined>("");
  const [isSuccess, setIsSuccess] = useState<string | undefined>("");

  const serchParams = useSearchParams();
  const token = serchParams.get("token");

  const form = useForm<z.infer<typeof NewPasswodSchema>>({
    resolver: zodResolver(NewPasswodSchema),
    defaultValues: {
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof NewPasswodSchema>) {
    setIsError("");
    setIsSuccess("");
    // console.log(values);
    startTransition(() => {
      newPassword(values, token).then((data: any) => {
        setIsError(data?.error);
        setIsSuccess(data?.success);
      });
    });
  }
  return (
    <CardWrapper
      headerLabel="enter new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isPanding}
                      placeholder="*******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={isError} />
          <FormSeccess message={isSuccess} />
          <Button disabled={isPanding} className="w-full" type="submit">
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default NewPasswodForm;
