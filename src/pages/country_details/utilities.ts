import { CountryType } from "../../App";

export function findSelectedCountry(
    country: string | undefined,
    countries: CountryType[]
): CountryType | undefined {
    return countries.find((nation) => nation.cca3 === country);
}
