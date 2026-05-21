import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

// Clean button with three variants.
// All share the same typographic style — only border/bg changes.
export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body font-medium transition-all duration-300 px-8 py-4 cursor-pointer";

  const variants = {
    primary: "bg-stone-900 text-stone-50 hover:bg-stone-700",
    outline:
      "border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50",
    ghost: "text-stone-600 hover:text-stone-900 px-0 py-0",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
