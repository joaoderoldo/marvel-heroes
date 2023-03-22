import { vi } from "vitest";
import { render } from "@testing-library/react";
import NotFoundHeroes from "./NotFoundHeroes";

describe("NotFoundHeroes component", () => {
  it("should render correctly with props", () => {
    const props = {
      search: "Spiderman",
      handleCleanSearch: vi.fn(),
    };
    const { container } = render(<NotFoundHeroes {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
