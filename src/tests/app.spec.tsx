import Home from "../pages/home";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Ver Mais")).toBeInTheDocument();
  });
});
