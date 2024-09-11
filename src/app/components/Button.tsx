import { ReactNode, ButtonHTMLAttributes } from "react";
import cn from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary:
        "hover:bg-[#4d4d4c] transition-all duration-150 text-white bg-[#000]",
      secondary: "hover:bg-[#4d4d4c] transition-all duration-150 text-black",
    },
    size: {
      sm: "text-sm px-1 y-0",
      md: "text-base px-2 py-1",
      lg: "text-lg px-4 py-2",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
});
