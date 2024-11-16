import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Header } from "@components/header/header";

describe("#Header", () => {
  it("should highlight  the nav link when is the current page link", () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/home/Gabriel/clientes"]}>
        <Routes>
          <Route path="/home/:userName/*" element={<Header />} />
        </Routes>
      </MemoryRouter>
    );
  });
});
