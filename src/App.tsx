import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./components/country_list/country_list";
import CountryDetails from "./components/country_details/country_details";

export interface CountryType {
    name: {
        common: string;
        nativeName: { [key: string]: { [key: string]: string } };
    };
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
    };
    cca3: string;
    tld: string;
    languages: { [key: string]: string };
    currencies: { [key: string]: { [key: string]: string } };
    subregion: string;
    borders: string[];
}

export const CountriesData = createContext([] as CountryType[]);

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]);

    useEffect(() => {
        // Add error handling
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
                <div className="app_container">
                    <Routes>
                        <Route path="/" element={<CountryList />} />
                        <Route path="/:country" element={<CountryDetails />} />
                    </Routes>
                </div>
            </CountriesData.Provider>
        </Router>
    );
}

export default App;
