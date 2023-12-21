import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './index';


describe('Counter Tests', ()=>{
  

        test("increase btn", () => {
          render(<Counter />);
    
          const count = screen.getByText("0");
          const increaseBtn = screen.getByText("Increase");
    
           fireEvent.click(increaseBtn);
          expect(count).toHaveTextContent("1");
        });


    test("decrease btn",  () => {
      render(<Counter />);

      const count = screen.getByText("0");
      const decreaseBtn = screen.getByText("Decrease");

      fireEvent.click(decreaseBtn);
      expect(count).toHaveTextContent("-1");
    });


});
