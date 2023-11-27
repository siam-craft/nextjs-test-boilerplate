//@ts-ignore
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); // arrange
    const linkElement = screen.getByText("Docs"); // act
    expect(linkElement).toBeInTheDocument(); // assert
  });

  it("should have Next.js Logo", () => {
    render(<Home />); // arrange
    const linkElement = screen.getByAltText("Next.js Logo"); // act
    expect(linkElement).toBeInTheDocument(); // assert
  });

  it("should have 'information'", () => {
    render(<Home />); // arrange
    const linkElement = screen.getByText(/information/i); // act
    expect(linkElement).toBeInTheDocument(); // assert
  });

  it("should have a heading", () => {
    render(<Home />); // arrange
    const linkElement = screen.getByRole("heading", { name: "Learn" }); // act
    expect(linkElement).toBeInTheDocument(); // assert
  });
});
