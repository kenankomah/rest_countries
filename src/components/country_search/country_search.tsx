import { ChangeEvent, useEffect, useRef } from "react";
import { CountryType } from "../../App";
import "./country_search.scss";

interface CountrySearchProps {
    regionList: CountryType[];
    setCountryList: Function;
}

export default function CountrySearch({
    regionList,
    setCountryList,
}: CountrySearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    function searchByCountryName(name: string) {
        return regionList.filter((country: CountryType) =>
            country.name.common.toLowerCase().includes(name.toLowerCase())
        );
    }

    useEffect(() => {
        const value = inputRef.current?.value;
        if (value) {
            setCountryList(searchByCountryName(value));
        }
    }, [regionList]);

    return (
        <input
            className="search_field"
            type="text"
            placeholder="Search for a country..."
            ref={inputRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const target = e.target as HTMLInputElement;
                setCountryList(searchByCountryName(target.value));
            }}
        />
    );
}
