import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  it('renders the "Carregando" text', () => {
    const { getByText } = render(<Loading />);
    expect(getByText("Carregando")).toBeInTheDocument();
  });

  it("renders the loading animation", () => {
    const { getByAltText } = render(<Loading />);
    expect(getByAltText("Carregando")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});
