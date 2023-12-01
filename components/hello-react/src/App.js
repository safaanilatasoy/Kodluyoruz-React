import './App.css';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa aliquam totam, quam vero aperiam non? Commodi, est 
        adipisci ipsa nam nostrum magni dolorum repudiandae velit. 
        Obcaecati.</p>

        <label htmlFor="myInput">
          Name:
         
          <input id="myInput" type="text" />
        </label>

    </>

  );
}

export default App;
