import NavItem, { INavItem } from "app/components/base/NavItem";
import { useEffect } from "react";
export interface ISidebarProps {
    navItemList?: INavItem[];
    onMenuClick?(value: string): void;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
    const { navItemList, onMenuClick } = props;

    return (
        <aside className="col-12 col-md-12 col-lg-2">
            <div className="sidebar box sticky-column">
                <div className="nav">
                    {navItemList?.map((item, idx) => (
                        <NavItem key={idx} navItem={item} onClick={onMenuClick}/>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
