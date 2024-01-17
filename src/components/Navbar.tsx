import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from './toggle-mode';

const Navbar = () => {
  return (
    <>
      <NavigationMenu className="px-9 right-0 left-0 max-w-full justify-between">
        <NavLink to="/" className="font-medium text-xl">
          Jam
        </NavLink>
        <NavigationMenuList>
          <NavigationMenuItem className="w-20"></NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="/login" preventScrollReset={true}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Login
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
