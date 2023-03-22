import { render } from "@testing-library/react";
import Container from "@/components/Container/Container";

describe("Container", () => {
  it("renders Container component correctly and match snapshop", () => {
    const { queryByTestId } = render(<Container>Hello, World!</Container>);
    expect(queryByTestId("container-component")).toMatchSnapshot();
  });

  it("renders Container component correctly and match snapshop with applied class", () => {
    const { queryByTestId } = render(
      <Container classes="foo bar">Hello, World!</Container>
    );
    expect(queryByTestId("container-component")).toMatchSnapshot();
  });

  it("renders children", () => {
    const { getByText } = render(<Container>Hello, World!</Container>);
    expect(getByText("Hello, World!")).toBeInTheDocument();
  });

  it("applies classes", () => {
    const { container } = render(
      <Container classes="foo bar">Hello, World!</Container>
    );
    expect(container.firstChild).toHaveClass("foo bar");
  });
});
