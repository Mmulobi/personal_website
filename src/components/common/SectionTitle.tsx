interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-center mb-12">
      {children}
    </h2>
  );
}