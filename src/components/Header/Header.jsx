import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

import logo from "../../assets/logo/logo.svg";



function Header() {
    return (
        <header className="primary-header">
            <div className="container">
                <div className="header-content-wrapper| flex">
                    {/* logo */}
                    <div className="logo-wrapper">
                        <img src={logo} alt="Logo" className="header-logo" />
                    </div>
                    {/* theme switcher */}
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header;