import { NAV_ITEMS } from '../../utils/constants';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className="block px-3 py-2"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}