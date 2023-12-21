import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import emojiList from "./emojiList.json";
import Header from "./Header";

import App from "./App";

describe("App Tests", () => {


  //* Title render test
  test("Başlık başarılı bir şekilde render edilmeli", () => {
    render(<Header />);

    // Title control te
    const emojiImages = screen.getAllByRole("img", { name: "" });
    const headerText = screen.getByText("Emoji Search");

    // expected scenarios
    expect(emojiImages.length).toBe(2);
    expect(headerText).toBeInTheDocument();
  });



// Emoji list render test
  test("EmojiList başarıyla render edilmeli", () => {
    render(<App />);

 const emoji = emojiList.slice(0, 10); 

 emoji.map((item) => {
   expect(screen.getByText(item.title)).toBeInTheDocument();
 });
  });
});

//* Emoji list filter re-render test
 test("emoji list filter search test", () => {
    render(<App />);
    const emojiList =[...document.querySelectorAll('.emoji-item')].slice(0, 10);
    emojiList.map((i) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    })
 });

  //* emoji copy test
  test("when click on emoji it will be copy on board", () => {
    render(<App />);
    const copy = screen.getByText('Smile');

    fireEvent.click(copy);
    expect(copy.parentElement.getAttribute('data-clipboard-text')).toMatch('😄');
  });
  
   

