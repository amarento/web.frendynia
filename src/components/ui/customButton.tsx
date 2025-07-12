import { cva } from "class-variance-authority";
import { buttonVariants } from "~/components/ui/button";

export const customButton = cva(
    buttonVariants, 
    {
      variants: {
        variant: {
          green: "bg-dark-green-default text-primary-white-default", 
        },
      },
    }
  );