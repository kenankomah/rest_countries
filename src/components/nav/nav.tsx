import { useState } from "react";
import "./nav.scss";

function Nav() {
    const isDarkTheme = document.body.classList.contains("dark-theme");
    const [darkTheme, setDarkTheme] = useState(isDarkTheme);

    function themeToggle() {
        //consider using useRef to get the body element
        document.body.classList.toggle("dark-theme");
        setDarkTheme(!darkTheme);
    }

    const themeText = darkTheme ? "Light Mode" : "Dark Mode";
    const themeIcon = darkTheme
        ? "/light_mode_icon.svg"
        : "/dark_mode_icon.svg";

    return (
        <nav onClick={themeToggle} className="nav-bar">
            Where in the world
            <div className="theme-toggle">
                <span>{themeText}</span>
                <div className="theme_icon_container">
                    <img
                        className="theme_icon"
                        src={themeIcon}
                        alt={themeText}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
