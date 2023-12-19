import { render, screen } from "@testing-library/react";
import CountryCard from "./country_card";
import { BrowserRouter } from "react-router-dom";
import { mockCountriesList } from "../../mockData";

describe("country card", () => {
    it("renders the country card correctly", () => {
        const cardData = mockCountriesList[0];
        render(
            <BrowserRouter>
                <CountryCard country={cardData} />
            </BrowserRouter>
        );

        const name = cardData.name.common;
        const population = cardData.population.toLocaleString();
        const region = cardData.region;
        const capital = cardData.capital[0];

        const flagSrc = cardData.flags.svg;
        const altText = cardData.flags.alt;

        const slug = cardData.cca3;

        expect(screen.getByText(name)).toBeInTheDocument();

        expect(screen.getByText(population)).toBeInTheDocument();
        expect(screen.getByText(region)).toBeInTheDocument();
        expect(screen.getByText(capital)).toBeInTheDocument();

        expect(screen.getByAltText(altText)).toBeInTheDocument();
        expect(screen.getByAltText(altText)).toHaveAttribute("src", flagSrc);
        expect(screen.getByRole("link")).toBeInTheDocument();
        expect(screen.getByRole("link")).toHaveAttribute("href", `/${slug}`);
    });
});
