import { ReactNode } from "react";
import clsx from "clsx";

import NavItemStyles from "./style";

export interface INavItem {
  id: string;
  icon: ReactNode;
  label: string;
}
export interface INavItemProps {
  activeId?: string;
  navItem: INavItem;
  onClick?(currItem: INavItem): void;
}

const NavItem: React.FC<INavItemProps> = (props) => {
  const classes = NavItemStyles();

  const { activeId, navItem, onClick } = props;

  const handleItemClick = () => {
    onClick && onClick(navItem);
  };

  return (
    <div className={clsx(classes.NavItem, "nav__item")}>
      <div
        onClick={handleItemClick}
        className={activeId === navItem.id ? "active" : undefined}
      >
        {navItem.icon}
        <span>{navItem.label}</span>
      </div>
    </div>
  );
};

export default NavItem;
