import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Heroes from "./Heroes";

vi.mock("@/proxy/Heroes", () => ({
  getHeroes: vi.fn(() => ({
    data: {
      data: {
        total: 10,
        count: 10,
        results: [
          {
            name: "Spider-Man",
            thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
              extension: "jpg",
            },
            description: "The friendly neighborhood Spider-Man!",
            series: {
              available: 1,
              items: [],
            },
            events: {
              available: 1,
              items: [],
            },
          },
        ],
      },
    },
    isLoading: false,
  })),
}));

describe("Heroes component", () => {
  it("renders heroes data correctly", async () => {
    const { container } = render(<Heroes />, { wrapper: BrowserRouter });

    await screen.findByText("Spider-Man");

    expect(screen.getByText("Spider-Man")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
