
const Header = () => {
    return (
        <header className="header box">
            <div className="header__left">
                <div className="header__photo">
                    <img className="header__photo-img" src="./avatar.jpg" alt="Dang Ngoc Duy"/>
                </div>
                <div className="header__base-info">
                    <h4 className="title titl--h4">Dang Ngoc Duy</h4>
                    <div className="status">Developer</div>
                    <ul className="header__social">
                        <li><a href="https://www.facebook.com/tanodang"><i className="font-icon icon-facebook1"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/duydangit/"><i className="font-icon icon-linkedin1"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="header__right">
                <ul className="header__contact">
                    <li><span className="overhead">Email</span>duydangit24@gmail.com</li>
                    <li><span className="overhead">Phone</span>(+84) 90–9090-911</li>
                </ul>
                <ul className="header__contact">
                    <li><span className="overhead">Birthday</span>2x January, 199x</li>
                    <li><span className="overhead">Location</span>Ho Chi Minh City, VN</li>
                </ul>
            </div>
      </header>
    )
}

export default Header;