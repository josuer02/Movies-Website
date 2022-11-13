import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Proximamente from '../pages/Cartelera/Proximamente'
import Cartelera from '../pages/Cartelera/Cartelera'
jest.spyOn(console, "error").mockImplementation(() => {});
describe("Pagina de Proximamente", () => {
  it("Ver que todo cargue", async () => {
    render(<Proximamente />, {wrapper: BrowserRouter});
    expect(screen.getByRole("heading")).toHaveTextContent(/Proximos Estrenos/);
    await waitFor(() => {
      screen.getAllByTestId("imgProx");
      screen.getAllByTestId("nameProx");
      screen.getAllByTestId("tipoProx");
      screen.getAllByTestId("dateProx");
    });
  });
  
  });

