import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TableRow from "./TableRow";
import TableCol from "../TableCol/TableCol";

interface TableHeaderMock {
  onClick: () => void;
}

const TableHeaderMock = ({ onClick }: TableHeaderMock) => (
  <TableRow classes="table-row" onClick={onClick}>
    <TableCol>Personagem</TableCol>
    <TableCol>Séries</TableCol>
    <TableCol>Eventos</TableCol>
  </TableRow>
);

describe("TableRow", () => {
  it("should render the component", () => {
    const { container } = render(
      <TableHeaderMock onClick={() => console.log("clicked!")} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const { getByText } = render(
      <TableHeaderMock onClick={() => console.log("clicked!")} />
    );
    expect(getByText("Personagem")).toBeInTheDocument();
    expect(getByText("Séries")).toBeInTheDocument();
    expect(getByText("Eventos")).toBeInTheDocument();
  });

  it("should handle onClick event correctly", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<TableHeaderMock onClick={onClickMock} />);
    fireEvent.click(getByText("Personagem"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
