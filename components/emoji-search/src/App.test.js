import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Bu kütüphaneyi henüz içe aktarmadıysanız ekleyin

import App from "./App";

describe("App Tests", () => {
  test("EmojiList başarıyla render edilmeli", () => {
    render(<App />);

    const emojiListElement = screen.getByTestId("emojiList");

    expect(emojiListElement).toBeInTheDocument();
  });
});
