import { ReactNode, HTMLAttributes } from "react";
import cn from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";


interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}


export default function Text({
  children,
  className,
  variant,
  size,
  ...props
}: ParagraphProps) {
  return (
    <p className={cn(textVariants({ variant, size, className }))} {...props}>
      {children}
    </p>
  );
}


const textVariants = cva("font-sans text-center", {
  variants: {
    variant: {
      primary: "transition-all duration-150 text-black",
      secondary: "transition-all duration-150 text-white",
    },
    size: {
      sm: "lg:leading-[14px] leading-[12px] text-[13px] lg:text-[16px]",
      md: "lg:leading-[21px] leading-[13px] text-[16px] lg:text-[24px] font-semibold",
      lg: "lg:leading-[54px] leading-[21px] text-[24px] lg:text-[54px] font-extrabold",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
