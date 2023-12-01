import './App.css';
import Header from './components/Header'


const name = "Anıl";
const surname = "Atasoy";
const isLoggedIn = true;

function App() {
  return (
    <>
      <Header />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam
        totam, quam vero aperiam non? Commodi, est adipisci ipsa nam nostrum
        magni dolorum repudiandae velit. Obcaecati.
      </p>

      <label htmlFor="myInput">
        Name:
        <input id="myInput" type="text" />
      </label>

      {/* if login success*/}
      <h3 className="loginSuccess">{isLoggedIn && `Hoşgeldiniz ${name} ${surname}`}</h3>

      {/* if login fail */}
      <h3 className="loginFail">{!isLoggedIn && `Lütfen giriş yapınız`}</h3>
    </>
  );
}

export default App;
