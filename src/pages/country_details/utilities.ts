import { CountryType } from "../../App";

export function findSelectedCountry(
    countryCode: string | undefined,
    countries: CountryType[]
): CountryType | undefined {
    return countries.find((nation) => nation.cca3 === countryCode);
}
