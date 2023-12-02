import './App.css';
import Header from './components/Header'
import User from './components/User'




function App() {
  return (
    <>
      <Header />
      <User 
      name="Anıl" 
      surname="Atasoy" 
      isLoggedIn={true}
      friends ={["Ali", "Ahmet", "Mehmet", "Ayşe"]}
      age = {25}
      address = {
        {
          title: "Maslak/Istanbul",
          zip: 34755
        }
      }
      />


    </>
  );
}

export default App;
