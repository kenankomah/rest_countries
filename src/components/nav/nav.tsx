import { useState } from "react";
import "./nav.scss";

type classListActions = "add" | "remove" | "contains" | "toggle";

function themeClassHandler(action: classListActions) {
    return document.body.classList[action]("dark-theme");
}

function Nav() {
    localStorage.getItem("darkMode") === "true"
        ? themeClassHandler("add")
        : themeClassHandler("remove");

    const isDarkMode = themeClassHandler("contains");
    const [darkMode, setDarkMode] = useState(isDarkMode);

    function themeToggle() {
        themeClassHandler("toggle");
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", (!darkMode).toString());
    }

    const themeText = darkMode ? "Light Mode" : "Dark Mode";
    const themeIcon = darkMode
        ? "/assets/light_mode_icon.svg"
        : "/assets/dark_mode_icon.svg";

    return (
        <nav className="nav-bar">
            <div className="content_container">
                <p className="nav_text"> Where in the world?</p>
                <div className="theme-toggle">
                    <div onClick={themeToggle} className="theme_icon_container">
                        <img
                            className="theme_icon"
                            src={themeIcon}
                            alt={themeText}
                        />
                    </div>
                    <span className="theme_text">{themeText}</span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
