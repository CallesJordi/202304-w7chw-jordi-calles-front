import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered", () => {
    test("Then it should show a header with the title 'Pirate Social Network'", () => {
      const expectedText = "Pirate Social Network";

      render(<Layout />);

      const heading = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
