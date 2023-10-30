import { useState } from "react";

function Nav() {
    const isDarkTheme = document.body.classList.contains("dark-theme");

    const [darkTheme, setDarkTheme] = useState(isDarkTheme);

    function themeToggle() {
        //consider using useRef to get the body element
        document.body.classList.toggle("dark-theme");
        setDarkTheme(!darkTheme);
    }

    return (
        <nav onClick={themeToggle} className="nav-bar">
            Where in the world
            <div className="theme-toggle">
                <span>{darkTheme ? "Light Mode" : "Dark Mode"}</span>
            </div>
        </nav>
    );
}

export default Nav;
