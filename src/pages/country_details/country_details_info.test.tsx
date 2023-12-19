import { render, screen } from "@testing-library/react";
import CountryDetailsInfo from "./country_details_info";
import { BrowserRouter } from "react-router-dom";
import { mockCountriesList } from "../mockData";
import { CountriesData } from "../../App";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        countryCode: "CAN",
    }),
}));

describe("country details info", () => {
    it("renders the country info correctly", () => {
        const cardData = mockCountriesList[0];
        const contextValue = { countries: mockCountriesList, error: false };
        render(
            <BrowserRouter>
                <CountriesData.Provider value={contextValue}>
                    <CountryDetailsInfo />
                </CountriesData.Provider>
            </BrowserRouter>
        );

        const name = cardData.name.common;
        const population = cardData.population.toLocaleString();
        const region = cardData.region;
        const capital = cardData.capital[0];

        const flagSrc = cardData.flags.svg;
        const altText = cardData.flags.alt;

        expect(screen.getAllByText(name)[0]).toBeInTheDocument();
        expect(screen.getByText(population)).toBeInTheDocument();
        expect(screen.getByText(region)).toBeInTheDocument();
        expect(screen.getByText(capital)).toBeInTheDocument();
        expect(screen.getByAltText(altText)).toBeInTheDocument();
        expect(screen.getByAltText(altText)).toHaveAttribute("src", flagSrc);
    });
});
