import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Confirmar from '../pages/Reservas/Confirmar'
import { BrowserRouter } from "react-router-dom";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Confirmar", () => {
  it("Render pagina", () => {
    render(<Confirmar />, { wrapper: BrowserRouter });

    expect(screen.getByRole("heading")).toHaveTextContent(/Confirma para cancelar la reserva/);
    expect(screen.getByTestId("IDD")).toBeInTheDocument();
    expect(screen.getByTestId("emailD")).toBeInTheDocument();
    expect(screen.getByTestId("dateD")).toBeInTheDocument();
    expect(screen.getByTestId("priceD")).toBeInTheDocument();
    expect(screen.getByTestId("nameD")).toBeInTheDocument();
    expect(screen.getByTestId("descripcionD")).toBeInTheDocument();
    expect(screen.getByTestId("btnSubmitD")).toBeInTheDocument();
    
  });
});
