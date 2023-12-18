import { searchByCountryName, regionFilter } from "./utilities";
import { mockCountriesList } from "../mockData";

describe("region filter", () => {
    it("should return an array of 2 countries that match the region", () => {
        const mockRegion = "Americas";
        const expected = "Americas";

        expect(regionFilter(mockCountriesList, mockRegion)[0].region).toEqual(
            expected
        );

        expect(regionFilter(mockCountriesList, mockRegion)[1].region).toEqual(
            expected
        );

        expect(regionFilter(mockCountriesList, mockRegion).length).toEqual(2);
    });
});

describe("search by countryName", () => {
    it("should return an array of countries that match the search term", () => {
        const mockSearchTerm = "canada";
        const expected = "Canada";

        expect(
            searchByCountryName(mockSearchTerm, mockCountriesList)[0].name
                .common
        ).toEqual(expected);
    });
});
