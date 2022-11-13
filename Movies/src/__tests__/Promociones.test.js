import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Promociones from "../pages/Promociones/Promociones";
jest.spyOn(console, "error").mockImplementation(() => {});
describe("Pagina de Promociones", () => {
  it("Ver que todo cargue", async () => {
    render(<Promociones />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Promociones/);
    await waitFor(() => {
      screen.getAllByText("Entradas 2x1");
      screen.getAllByText("Entrada a mitad de precio");
      screen.getAllByTestId("imagenBancos");
      screen.getAllByTestId("descriptionPromos");
    });
  });
});
