import NavItem, { INavItem } from 'app/components/base/NavItem';
export interface ISidebarProps {
  activeId?: string;
  navItemList?: INavItem[];
  onMenuClick?(currItem: INavItem): void;
}

const Sidebar: React.FC<ISidebarProps> = props => {
  const { activeId, navItemList, onMenuClick } = props;

  return (
    <aside className="col-12 col-md-12 col-lg-2">
      <div className="sidebar box sticky-column">
        <div className="nav">
          {navItemList?.map((item, idx) => (
            <NavItem
              key={idx}
              activeId={activeId ? activeId : '1'}
              navItem={item}
              onClick={onMenuClick}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
