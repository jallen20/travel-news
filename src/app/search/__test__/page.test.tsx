import {describe, expect, it} from "@jest/globals";
import SearchPage from "../page";
import {render} from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

describe("Search Page Tests", () => {
    it("Should display no results", () => {
        const {container} = render(
            <SearchPage />,
            
        );
        expect(container).toMatchSnapshot();
    });
})
