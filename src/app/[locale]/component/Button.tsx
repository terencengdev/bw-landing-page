interface ButtonProps {
  children: string;
  onClick: () => void;
  variant?: "primary" | "rounded_primary";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const styles = "main-btn px-4 py-2";

  const variants = {
    primary:
      "bg-[#F37406] text-white hover:bg-[#fff] hover:text-[#F37406] rounded-lg",
    rounded_primary:
      "bg-[#F37406] text-white hover:bg-[#fff] hover:text-[#F37406] rounded-[3em]",
  };

  return (
    <button onClick={onClick} className={`${styles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
