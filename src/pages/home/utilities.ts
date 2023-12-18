import { CountryType } from "../../App";

export function regionFilter(countries: CountryType[], region: string) {
    return countries.filter((country) => country.region === region);
}

export function searchByCountryName(name: string, regionList: CountryType[]) {
    return regionList.filter((country: CountryType) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
    );
}
