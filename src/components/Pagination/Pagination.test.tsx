import { vi } from "vitest";
import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const handleOffset = vi.fn();

  it("should render the component", () => {
    const { asFragment } = render(
      <Pagination totalPages={10} handleOffset={handleOffset} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render pagination items correctly", () => {
    const { getByText } = render(
      <Pagination totalPages={5} handleOffset={handleOffset} />
    );
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("should call handleOffset function when a pagination item is clicked", () => {
    const { getByText } = render(
      <Pagination totalPages={10} handleOffset={handleOffset} />
    );
    fireEvent.click(getByText("2"));
    expect(handleOffset).toHaveBeenCalledWith(7);
  });

  it("should disable left arrow button when the first page is active", () => {
    const { queryByText, getByText } = render(
      <Pagination totalPages={10} handleOffset={handleOffset} />
    );

    const leftArrowButton = queryByText("«");
    expect(leftArrowButton).not.toBeInTheDocument();
    fireEvent.click(getByText("5"));
    waitFor(() => expect(leftArrowButton).toBeInTheDocument());
  });
});
