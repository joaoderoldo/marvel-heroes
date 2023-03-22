import { render } from "@testing-library/react";
import { TableWrapper } from "./TableWrapper";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import TableCol from "../TableCol/TableCol";

const TableMock = () => (
  <TableWrapper classes="table-wrapper">
    <TableHeader classes="table-header">
      <TableCol>Personagem</TableCol>
      <TableCol>Séries</TableCol>
      <TableCol>Eventos</TableCol>
    </TableHeader>
    <TableRow classes="table-row">
      <TableCol>Personagem Teste</TableCol>
      <TableCol>Serie Teste</TableCol>
      <TableCol>Evento Teste</TableCol>
    </TableRow>
  </TableWrapper>
);

describe("TableWrapper", () => {
  it("renders component correctly", () => {
    const { container } = render(<TableMock />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the children correctly", () => {
    const { getByText } = render(<TableMock />);
    expect(getByText("Personagem")).toBeInTheDocument();
  });

  it("renders with the correct className", () => {
    const { container } = render(<TableMock />);
    expect(container.firstChild).toHaveClass("table-wrapper");
  });
});
