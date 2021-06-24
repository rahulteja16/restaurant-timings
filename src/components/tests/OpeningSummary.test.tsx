import { render, screen } from "@testing-library/react";
import GlobalStyles from "../../styles/GlobalStyles";
import ThemeProvider from "../../styles/ThemeProvider";
import OpeningSummary from "../OpeningSummary";

describe("Opening Summary Component", () => {
  test("it should render opening summary", async () => {
    render(
      <ThemeProvider>
        <GlobalStyles />
        <OpeningSummary />
      </ThemeProvider>
    );
    await screen.findByTestId("opening-summary-list");
  });
});
