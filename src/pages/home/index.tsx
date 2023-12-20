import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import { CountriesData } from "../../App";
import CountrySearch from "./country_search/country_search";
import RegionSelector from "./region_selector/region_selector";
import "./home_page.scss";
import CountryList from "./country_list/country_list";

export default function HomePage() {
    const { countries } = useContext(CountriesData);

    const [countryList, setCountryList] = useState(countries);
    const [regionList, setRegionList] = useState(countries);

    useEffect(() => {
        setCountryList(countries);
        setRegionList(countries);
    }, [countries]);

    return (
        <div className="App ">
            <Header />

            <main className="container">
                <div className="search_and_filter">
                    <CountrySearch
                        regionList={regionList}
                        setCountryList={setCountryList}
                    />
                    <RegionSelector
                        setCountryList={setCountryList}
                        setRegionList={setRegionList}
                    />
                </div>

                <CountryList countryList={countryList} />
            </main>
        </div>
    );
}
