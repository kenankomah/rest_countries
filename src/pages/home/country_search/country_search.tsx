import { ChangeEvent, useEffect, useRef } from "react";
import { CountryType } from "../../../App";
import "./country_search.scss";
import { searchByCountryName } from "../utilities";

interface CountrySearchProps {
    regionList: CountryType[];
    setCountryList: Function;
}

export default function CountrySearch({
    regionList,
    setCountryList,
}: CountrySearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const value = inputRef.current?.value;
        if (value) {
            setCountryList(searchByCountryName(value, regionList));
        }
    }, [regionList]);

    return (
        <input
            className="search_field"
            type="text"
            placeholder="Search for a country..."
            ref={inputRef}
            name="search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                document.body.classList.add("searching");
                const target = e.target as HTMLInputElement;
                setCountryList(searchByCountryName(target.value, regionList));
            }}
        />
    );
}
