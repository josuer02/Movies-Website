import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Ver from '../pages/Reservas/Ver'
import { BrowserRouter } from "react-router-dom";

jest.spyOn(console, "error").mockImplementation(() => {});

describe("Ver", () => {
  it("Render pagina", () => {
    render(<Ver />, { wrapper: BrowserRouter });

    expect(screen.getByRole("heading")).toHaveTextContent(/Reservas/i);
    expect(screen.getByTestId("cancelarV")).toBeInTheDocument();
    expect(screen.getByTestId("emailV")).toBeInTheDocument();
    expect(screen.getByTestId("dateV")).toBeInTheDocument();
    expect(screen.getByTestId("priceV")).toBeInTheDocument();
    expect(screen.getByTestId("nameV")).toBeInTheDocument();
    expect(screen.getByTestId("descripcionV")).toBeInTheDocument();
    expect(screen.getByTestId("btnDelete")).toBeInTheDocument();
    
    expect(screen.getByTestId("btnVer")).toBeInTheDocument();
    
  });
  it("Ver que todo cargue", async () => {
    render(<Ver />, { wrapper: BrowserRouter });
    await waitFor(() => {
      screen.getAllByTestId("emailApi");
      screen.getAllByTestId("nameApi");
      screen.getAllByTestId("priceApi");
      screen.getAllByTestId("dateApi");
      screen.getAllByTestId("descriptionApi");
    });
  });
});
