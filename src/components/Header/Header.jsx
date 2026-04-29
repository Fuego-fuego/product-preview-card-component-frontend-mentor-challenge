import { Link } from "react-router-dom";

import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";


import "./header.css";

import logo from "../../assets/logo/logo.svg";



function Header() {
    return (
        <header className="primary-header">
            <div className="container">
                <div className="header-content-wrapper | flex">
                    <Link to="/">
                        {/* logo */}
                        <div className="logo-wrapper">
                            <img src={logo} alt="Logo" className="header-logo" />
                        </div>
                    </Link>
                    {/* theme switcher */}
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header;