import './App.css';
import Header from './components/Header'
import User from './components/User'




function App() {
  return (
    <>
      <Header />
      <User name="Anıl" surname="Atasoy" isLoggedIn={true}/>


    </>
  );
}

export default App;
