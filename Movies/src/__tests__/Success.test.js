import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Succes from "../pages/Respuestas/Success";
jest.spyOn(console, "error").mockImplementation(() => {});
describe("Home Page", () => {
  it("Render pagina principal", () => {
    render(<Succes />, {wrapper: BrowserRouter});
    expect(screen.getByRole("heading")).toHaveTextContent(/RESERVA EXITOSA/);
  });
  it("Ver que este el boton de Home", () => {
    render(<Succes />, {wrapper: BrowserRouter});
    expect(screen.getByText("Volver al Menu Principal")).toBeInTheDocument();
  });
  it("Ver que este el boton de Ver Reservas", () => {
    render(<Succes />, {wrapper: BrowserRouter});
    expect(screen.getByText("Ver Reservas")).toBeInTheDocument();
  });
});
