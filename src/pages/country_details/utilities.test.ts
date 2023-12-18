import { findSelectedCountry } from "./utilities";
import { mockCountriesList } from "../mockData";

describe("region filter", () => {
    it("should return a single country", () => {
        const countryCode = "GHA";
        const expected = "Ghana";

        expect(
            findSelectedCountry(countryCode, mockCountriesList)?.name.common
        ).toEqual(expected);
    });
});
