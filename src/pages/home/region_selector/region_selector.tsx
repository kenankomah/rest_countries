import { MouseEvent, useContext, useEffect, useState } from "react";
import { CountriesData } from "../../../App";
import "./region_selector.scss";
import { regionFilter } from "../utilities";
interface CountryFilterProps {
    setCountryList: Function;
    setRegionList: Function;
}

export default function RegionSelector({
    setCountryList,
    setRegionList,
}: CountryFilterProps) {
    const { countries } = useContext(CountriesData);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [region, setRegion] = useState("Filter by Region");

    useEffect(() => {
        document.querySelector("html")?.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if (
                target?.classList.contains("dropdown-content") ||
                target?.classList.contains("dropdown-button") ||
                target?.classList.contains("chevron_container")
            )
                return;
            setIsMenuOpen(false);
        });
    }, []);

    function filterByRegion(region: string) {
        if (region === "Filter by Region" || region === "All Regions") {
            setRegionList(countries);
            return countries;
        }

        setRegionList(regionFilter(countries, region));
        return regionFilter(countries, region);
    }

    function menuSate(e: MouseEvent<HTMLDivElement>) {
        setIsMenuOpen(!isMenuOpen);
        const target = e.target as HTMLDivElement;
        if (target.nodeName === "P") {
            const textContent = target.textContent as string;
            setRegion(textContent);
            setCountryList(filterByRegion(textContent));
        }
    }

    const menuClass = isMenuOpen ? "dropdown-content" : "dropdown-content hide";
    const chevronClass = isMenuOpen
        ? "chevron_container rotate"
        : "chevron_container";

    return (
        <div className="dropdown" onClick={menuSate}>
            <button className="dropdown-button">
                {region}

                <div className={chevronClass}></div>
            </button>
            <div className={menuClass}>
                <p>All Regions</p>
                <p>Africa</p>
                <p>Americas</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Oceania</p>
            </div>
        </div>
    );
}
