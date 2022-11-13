import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from '../pages/Home/Home'
jest.spyOn(console, "error").mockImplementation(() => {});
describe("Home Page", () => {
  it("Render pagina principal", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Cinema Movies/);
    expect(screen.getByTestId("registroTexto")).toHaveTextContent(/Registrate para conocer descuentos especiales/);
    expect(screen.getByTestId("videoAdelanto")).toBeInTheDocument();
    
  });
});
