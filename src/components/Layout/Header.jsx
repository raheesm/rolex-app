import logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <header className="py-2 md:py-8 md:absolute md:top-0 md:w-full">
            <div className="container">
                <nav className="flex justify-between md:justify-start md:gap-8 items-center">
                    <a href="index.html">
                        <img src={logo} alt="logo" />
                    </a>

                    <div>
                        <ul className="gap-6 hidden md:flex uppercase">
                            <li className="font-semibold"><a href="#">Home</a></li>
                            <li className="font-semibold"><a href="#">About Us</a></li>
                            <li className="font-semibold"><a href="#">Business</a></li>
                            <li className="font-semibold"><a href="#">Faq</a></li>
                            <li className="font-semibold"><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div id="menu-icon" className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>

                </nav>
            </div>
        </header>
    );
}

export default Header;