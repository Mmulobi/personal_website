interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a 
      href={href}
      className={`text-gray-700 hover:text-blue-600 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}