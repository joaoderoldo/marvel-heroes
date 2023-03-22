import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import DefaultLayout from "./DefaultLayout";

describe("DefaultLayout", () => {
  it("should render and match snapshot", () => {
    const { container } = render(<DefaultLayout>Hello, world!</DefaultLayout>, {
      wrapper: BrowserRouter,
    });
    expect(container).toMatchSnapshot();
  });

  it("should render children", () => {
    const { getByText } = render(<DefaultLayout>Hello, world!</DefaultLayout>, {
      wrapper: BrowserRouter,
    });
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });
});
