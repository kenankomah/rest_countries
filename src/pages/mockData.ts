import { CountryType } from "../App";

export const mockCountriesList: CountryType[] = [
    {
        name: {
            common: "Canada",
            official: "Canada",
            nativeName: {
                eng: {
                    official: "Canada",
                    common: "Canada",
                },
                fra: {
                    official: "Canada",
                    common: "Canada",
                },
            },
        },
        tld: [".ca"],
        cca3: "CAN",

        currencies: {
            CAD: {
                name: "Canadian dollar",
                symbol: "$",
            },
        },
        capital: ["Ottawa"],
        region: "Americas",
        subregion: "North America",
        languages: {
            eng: "English",
            fra: "French",
        },
        borders: ["USA"],
        population: 38005238,
        flags: {
            svg: "https://flagcdn.com/ca.svg",
            alt: "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.",
        },
    },
    {
        name: {
            common: "United States of America",
            official: "United States of America",
            nativeName: {
                eng: {
                    official: "United States of America",
                    common: "United States of America",
                },
            },
        },
        tld: [".us"],
        cca3: "USA",

        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        capital: ["Washington D.C."],
        region: "Americas",
        subregion: "North America",
        languages: {
            eng: "English",
        },
        borders: ["CAN", "MEX"],
        population: 323947000,
        flags: {
            svg: "https://flagcdn.com/us.svg",
            alt: "The flag of the United States of America consists of 13 red and white horizontal stripes alternating and a blue rectangle in the canton with 50 white, five-pointed stars. The 50 stars on the flag represent the 50 states of the United States of America, and the 13 stripes represent the thirteen British colonies that declared independence from the Kingdom of Great Britain, and became the first states in the U.S.",
        },
    },
    {
        name: {
            common: "Ghana",
            official: "Republic of Ghana",
            nativeName: {
                eng: {
                    official: "Republic of Ghana",
                    common: "Ghana",
                },
            },
        },
        tld: [".gh"],
        cca3: "GHA",

        currencies: {
            GHS: {
                name: "Ghanaian cedi",
                symbol: "₵",
            },
        },
        capital: ["Accra"],
        region: "Africa",
        subregion: "Western Africa",
        languages: {
            eng: "English",
        },
        borders: ["BFA", "CIV", "TGO"],
        population: 27670174,
        flags: {
            svg: "https://flagcdn.com/gh.svg",
            alt: "The flag of Ghana consists of three horizontal bands of red, yellow and green colors. The red color represents the blood of those who died in the country's struggle for independence, the yellow color represents the country's mineral wealth, and the green color symbolizes the country's forests and natural wealth.",
        },
    },
];
