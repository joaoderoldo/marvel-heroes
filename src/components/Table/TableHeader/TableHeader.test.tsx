import { render } from "@testing-library/react";
import TableHeader from "./TableHeader";
import TableCol from "../TableCol/TableCol";

const TableHeaderMock = () => (
  <TableHeader classes="table-header">
    <TableCol>Personagem</TableCol>
    <TableCol>Séries</TableCol>
    <TableCol>Eventos</TableCol>
  </TableHeader>
);

describe("TableHeader", () => {
  it("should render the component", () => {
    const { container } = render(<TableHeaderMock />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const { getByText } = render(<TableHeaderMock />);
    expect(getByText("Personagem")).toBeInTheDocument();
    expect(getByText("Séries")).toBeInTheDocument();
    expect(getByText("Eventos")).toBeInTheDocument();
  });
});
