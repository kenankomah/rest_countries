import React, { useState, useEffect } from "react";
import CountryList from "./components/country_list/country_list";
// import "./App.scss";

function App() {
    return (
        <div className="App">
            <nav className="nav-bar">Where in the world?</nav>
            <CountryList />
        </div>
    );
}

export default App;
