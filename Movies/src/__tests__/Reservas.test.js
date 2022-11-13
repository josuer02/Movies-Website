import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Reservas from '../pages/Reservas/Reservas'
import { BrowserRouter } from "react-router-dom";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Reservas", () => {
  it("Render pagina", () => {
    render(<Reservas />, { wrapper: BrowserRouter });

    expect(screen.getByRole("heading")).toHaveTextContent(/Confirmación/);
    expect(screen.getByTestId("ID")).toBeInTheDocument();
    expect(screen.getByTestId("emailF")).toBeInTheDocument();
    expect(screen.getByTestId("date")).toBeInTheDocument();
    expect(screen.getByTestId("price")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("Descripcion")).toBeInTheDocument();
    expect(screen.getByTestId("btnSubmit")).toBeInTheDocument();
    expect(screen.getByTestId("btnVer")).toBeInTheDocument();
    
  });
});
