import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFound from "./NotFound";

describe("NotFound", () => {
  test("renders correctly", () => {
    const { container } = render(<NotFound />, { wrapper: BrowserRouter });
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders the "Voltar" link', () => {
    const { getByText } = render(<NotFound />, { wrapper: BrowserRouter });
    const linkElement = getByText(/Voltar/);
    expect(linkElement).toBeInTheDocument();
  });
});
