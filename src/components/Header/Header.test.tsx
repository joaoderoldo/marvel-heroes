import { render, waitFor } from "@testing-library/react";
import Header from "@/components/Header/Header";

import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  it("renders correctly and match snapshot", () => {
    const { queryByTestId } = render(<Header />, {
      wrapper: BrowserRouter,
    });
    expect(queryByTestId("header-component")).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<Header />, {
      wrapper: BrowserRouter,
    });
    waitFor(() => expect(getByTestId("header-component")).toBeInTheDocument());
  });

  it("renders the logo", () => {
    const { getByTestId } = render(<Header />, { wrapper: BrowserRouter });
    waitFor(() =>
      expect(getByTestId("logo-header-component")).toBeInTheDocument()
    );
  });
});
