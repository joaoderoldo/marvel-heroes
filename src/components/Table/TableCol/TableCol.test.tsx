import { render } from "@testing-library/react";
import TableCol from "./TableCol";

describe("TableCol", () => {
  it("should render the component", () => {
    const { container } = render(
      <TableCol dataLabel="Name" classes="table-cell">
        John Doe
      </TableCol>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const { getByText } = render(
      <TableCol dataLabel="Name" classes="table-cell">
        John Doe
      </TableCol>
    );
    expect(getByText("John Doe")).toBeInTheDocument();
  });

  it("should render data-label attribute correctly", () => {
    const { getByText } = render(
      <TableCol dataLabel="Name" classes="table-cell">
        John Doe
      </TableCol>
    );
    expect(getByText("John Doe")).toHaveAttribute("data-label", "Name");
  });
});
