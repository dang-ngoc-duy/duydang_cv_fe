import { ReactNode } from 'react';

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
    const { activeId, navItem, onClick } = props;

    const handleItemClick = () => {
        onClick && onClick(navItem)
    }
    
    return (
        <div className='nav__item'>
            <div onClick={handleItemClick} className={activeId === navItem.id ? 'active' : undefined}>
                {navItem.icon}
                {navItem.label}
            </div>
        </div>
    );
};

export default NavItem;
