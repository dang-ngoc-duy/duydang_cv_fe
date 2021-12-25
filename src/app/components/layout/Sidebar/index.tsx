
const Sidebar = () => {
    return (
        <aside className="col-12 col-md-12 col-lg-2">
            <div className="sidebar box sticky-column">
                <ul className="nav">
                    <li className="nav__item"><a className="active" href="#"><i className="icon-user"></i>About</a></li>
                    {/* <li className="nav__item"><a href="#"><i className="icon-file-text"></i>Resume</a></li>
                    <li className="nav__item"><a href="#"><i className="icon-codesandbox"></i>Works</a></li>
                    <li className="nav__item"><a href="#"><i className="icon-book-open"></i>Blog</a></li>
                    <li className="nav__item"><a href="#"><i className="icon-book"></i>Contact</a></li> */}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
