import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import OpeningItem from "../OpeningItem";
import { Schedule } from "../../types";
import ThemeProvider from "../../styles/ThemeProvider";
import GlobalStyles from "../../styles/GlobalStyles";

const props: Schedule = {
  day: "monday",
  isToday: false,
  openHrs: [],
};

describe("Opening Item Component", () => {
  test("it should render Closed text if there are no timings", () => {
    render(
      <ThemeProvider>
        <GlobalStyles />
        <OpeningItem {...props} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("closed-hrs")).toHaveTextContent("Closed");
  });

  test("it should render opening and closing hrs", () => {
    const timingsProps = { ...props };
    timingsProps.openHrs = ["10:00 AM - 6:00 PM"];
    render(
      <ThemeProvider>
        <GlobalStyles />
        <OpeningItem {...timingsProps} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("working-hrs")).toHaveTextContent(
      "10:00 AM - 6:00 PM"
    );
  });

  test("it should render TODAY text", () => {
    const todayProps = { ...props };
    todayProps.isToday = true;
    render(
      <ThemeProvider>
        <GlobalStyles />
        <OpeningItem {...todayProps} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("today-txt")).toHaveTextContent("Today");
  });

  test("it should render day as string", () => {
    render(
      <ThemeProvider>
        <GlobalStyles />
        <OpeningItem {...props} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("day-txt")).toHaveTextContent("monday");
  });

  test("it should match snapshot", () => {
    expect(
      render(
        <ThemeProvider>
          <GlobalStyles />
          <OpeningItem {...props} />
        </ThemeProvider>
      )
    ).toMatchSnapshot();
  });
});
