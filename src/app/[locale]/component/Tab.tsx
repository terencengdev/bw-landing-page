interface TabProps {
  children: React.ReactNode;
  title: string;
  icon?: string;
}

export default function Tab({ children, title = "", icon }: TabProps) {
  return (
    <div title={title} data-icon={icon}>
      {children}
    </div>
  );
}
