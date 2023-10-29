import { useState } from "react";

function Nav() {
    const isDarkTheme = document.body.classList.contains("dark-theme");

    const [darkTheme, setDarkTheme] = useState(isDarkTheme);

    function themeToggle() {
        document.body.classList.toggle("dark-theme");
        setDarkTheme(!darkTheme);
    }

    return (
        <nav onClick={themeToggle} className="nav-bar">
            Where in the world
            <div className="theme-toggle">
                <span>{darkTheme ? "Dark Mode" : "light mode"}</span>
            </div>
        </nav>
    );
}

export default Nav;
