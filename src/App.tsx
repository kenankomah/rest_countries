import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/country_details/country_details";
import HomePage from "./components/home_page/home_page";

export interface CountryType {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
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
        // only catches non 400 errors
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/all"
                );
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    if (!countries.length) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <CountriesData.Provider value={countries}>
                <div className="app_container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:country" element={<CountryDetails />} />
                    </Routes>
                </div>
            </CountriesData.Provider>
        </Router>
    );
}

export default App;
