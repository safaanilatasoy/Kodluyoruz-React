import './App.css';
import { Formik } from 'formik';

function App() {

  return (
    <>
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {
        ({handleSubmit, handleChange}) => (
          <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" onChange={handleChange} placeholder="First Name"/>

        <br />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" onChange={handleChange} placeholder="Last Name"/>
        <br />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="test@email.com"
          type="email"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
        )
      }
    </Formik>
    </>
  )
}

export default App
