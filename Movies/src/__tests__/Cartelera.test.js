import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Cartelera from "../pages/Cartelera/Cartelera";
jest.spyOn(console, "error").mockImplementation(() => {});
describe("Pagina de Cartelera", () => {
  it("Ver que todo cargue", async () => {
    render(<Cartelera />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading")).toHaveTextContent(/Cartelera/);
    await waitFor(() => {
      screen.getAllByTestId("imagenPelis");
      screen.getAllByTestId("nombrePelis");
      screen.getAllByTestId("fechaPelis");
      screen.getAllByTestId("descriptionPelis");
      screen.getAllByTestId("precioPelis");
    });
  });
  it("Ver que este el boton",  () => {
    
    render(<Cartelera  />, { wrapper: BrowserRouter });
    expect(screen.getByText("Proximos Estrenos")).toBeInTheDocument();
    
  });
});
