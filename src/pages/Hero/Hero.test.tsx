import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Hero from "./Hero";

vi.mock("@/proxy/Hero", () => ({
  getHero: vi.fn(() => ({
    data: {
      data: {
        results: [
          {
            name: "Spider-Man",
            thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
              extension: "jpg",
            },
            description: "The friendly neighborhood Spider-Man!",
          },
        ],
      },
    },
    isLoading: false,
  })),
}));

vi.mock("@/proxy/Events", () => ({
  getEvents: vi.fn(() => ({
    data: {
      data: {
        results: [
          {
            name: "Spider-Verse",
            thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/54adec1f5fb2b",
              extension: "jpg",
            },
            description: "The Spider-Verse event.",
          },
        ],
      },
    },
    isLoading: false,
  })),
}));

describe("Hero component", () => {
  it("renders hero data and events correctly", async () => {
    const { container } = render(<Hero />, { wrapper: BrowserRouter });

    await screen.findByText("Spider-Man");
    await screen.findByText("Spider-Verse");

    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    expect(screen.getByAltText("Spider-Man")).toBeInTheDocument();

    expect(screen.getByText("Spider-Verse")).toBeInTheDocument();
    expect(screen.getByAltText("Spider-Verse")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
