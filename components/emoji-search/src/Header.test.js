import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Tests", () => {
  test("Başlık başarılı bir şekilde render edilmeli", () => {
    render(<Header />);

    // Başlık içindeki öğeleri kontrol et
    const emojiImages = screen.getAllByRole("img", { name: "" });
    const headerText = screen.getByText("Emoji Search");

    // Beklenen durumları kontrol et
    expect(emojiImages.length).toBe(2);
    expect(headerText).toBeInTheDocument();
  });
});
