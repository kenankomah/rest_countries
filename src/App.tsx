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

interface ContextValueType {
    countries: CountryType[];
    error: boolean;
}

export const CountriesData = createContext({} as ContextValueType);

function App() {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                //replace with axios
                const response = await fetch(
                    "https://restcountries.com/v3.1/all"
                );

                if (!response.ok) {
                    setError(error);
                    throw new Error("Network response was not okk");
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                setError(true);
                console.error(error);
            }
        }
        fetchData();
    }, [error]);

    const contextValue = { countries, error };

    return (
        <Router>
            <CountriesData.Provider value={contextValue}>
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
