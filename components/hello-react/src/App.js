import './App.css';
import Header from './components/Header'


const name = "Anıl";
const surname = "Atasoy";

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

        <h3>{name}</h3>
        <h3>{`Fullname: ${name} ${surname}`}</h3>

    </>

  );
}

export default App;
