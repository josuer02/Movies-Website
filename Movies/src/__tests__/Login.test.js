import { render, screen, waitFor, within } from "@testing-library/react";
import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import AuthForm from "../components/Auth/AuthForm";

jest.spyOn(console, "error").mockImplementation(() => {});
describe("Login", () => {
  const submitHandler = jest.fn();
  beforeEach(() => {
    submitHandler.mockClear();
    render(<AuthForm submitHandler={submitHandler} />, {
      wrapper: BrowserRouter,
    });
  });

  it("Ver que cumpla con los campos", async () => {
    const clientEmail = screen.getByTestId("email");
    user.type(clientEmail, "test@test.com");

    const clientPassword = screen.getByTestId("password");
    user.type(clientPassword, "hola123");

    user.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(submitHandler).toHaveBeenCalledTimes(0);
    });
  });
  it("Ver que este el boton", () => {
    expect(screen.getByTestId("btnSubmit")).toBeInTheDocument();
  });
  it("Ver que esten los titulos", () => {
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByTestId("textoCorreo")).toBeInTheDocument();
    expect(screen.getByTestId("textoPw")).toBeInTheDocument();
    expect(screen.getByTestId("hover")).toBeInTheDocument();
  });
});
