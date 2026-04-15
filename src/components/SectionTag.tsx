interface SectionTagProps {
  children: React.ReactNode;
  variant?: "green" | "dark";
}

const SectionTag = ({ children, variant = "green" }: SectionTagProps) => (
  <span
    className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${
      variant === "green" ? "text-primary" : "rounded-full bg-foreground text-background px-4 py-1.5"
    }`}
  >
    {children}
  </span>
);

export default SectionTag;
