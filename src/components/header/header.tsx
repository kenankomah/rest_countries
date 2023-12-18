import { useState } from "react";
import "./header.scss";

type classListActions = "add" | "remove" | "contains" | "toggle";

const html = document.querySelector("html");

function themeClassHandler(action: classListActions) {
    return html?.classList[action]("dark-theme");
}

function Header() {
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
        <header className="header-bar">
            <div className="content_container">
                <h1 className="header_text"> Where in the world?</h1>
                <div onClick={themeToggle} className="theme-toggle">
                    <div className="theme_icon_container">
                        <img
                            className="theme_icon"
                            src={themeIcon}
                            alt={themeText}
                        />
                    </div>
                    <span className="theme_text">{themeText}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
