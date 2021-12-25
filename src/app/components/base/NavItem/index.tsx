import { ReactNode } from 'react';

export interface INavItem {
    status: boolean;
    icon: ReactNode;
    label: string;
}
export interface INavItemProps {
    navItem: INavItem;
    onClick?(value: string): void;
}

const NavItem: React.FC<INavItemProps> = (props) => {
    const { navItem, onClick } = props;

    const handleItemClick = () => {
        onClick && onClick(navItem.label)
    }
    
    return (
        <div className='nav__item'>
            <div onClick={handleItemClick} className={navItem.status ? 'active' : undefined}>
                {navItem.icon}
                {navItem.label}
            </div>
        </div>
    );
};

export default NavItem;
