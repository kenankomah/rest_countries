import { createContext, useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./components/country_list/country_list";
import CountryDetails from "./components/country_details/country_details";

interface Country {
    name: {
        common: string;
    };
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
    };
    cca3: string;
}

export const CountriesData = createContext([] as Country[]);

function App() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        }
        fetchData();
    }, []);

    return (
        <Router>
            <CountriesData.Provider value={countries}>
                <Routes>
                    <Route path="/" element={<CountryList />} />
                    <Route path="/:country" element={<CountryDetails />} />
                </Routes>
            </CountriesData.Provider>
        </Router>
    );
}

export default App;
