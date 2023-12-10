import { useContext, useEffect, useState } from "react";
import Nav from "../nav/nav";
import { CountriesData } from "../../App";
import CountrySearch from "../country_search/country_search";
import CountryFilter from "../country_filter/country_filter";
import "./home_page.scss";
import CountryList from "../country_list/country_list";

export default function HomePage() {
    const countries = useContext(CountriesData);

    //could these be set in the child components
    const [countryList, setCountryList] = useState(countries);
    const [regionList, setRegionList] = useState(countries);

    useEffect(() => {
        //could these be set in the child components
        setCountryList(countries);
        setRegionList(countries);
    }, [countries]);

    return (
        <div className="App ">
            <Nav />

            <div className="container">
                <div className="search_and_filter">
                    <CountrySearch
                        regionList={regionList}
                        setCountryList={setCountryList}
                    />
                    <CountryFilter
                        setCountryList={setCountryList}
                        setRegionList={setRegionList}
                    />
                </div>

                <CountryList countryList={countryList} />
            </div>
        </div>
    );
}
