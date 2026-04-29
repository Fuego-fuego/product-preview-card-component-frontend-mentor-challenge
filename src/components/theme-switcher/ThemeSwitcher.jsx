import "./theme-switcher.css";

function ThemeSwitcher() { 

    return (
        <div className="theme-switcher-wrapper">            
            <select name="themeSwitcher" id="themeSwitcher" className="theme-switcher | capitalize" aria-label="Theme Switcher">
                <option value="system" data-theme="system">🌓</option>
                <option value="light" data-theme="light">☀️</option>
                <option value="dark" data-theme="dark">🌙</option>
            </select>
        </div>
    )
}

export default ThemeSwitcher;