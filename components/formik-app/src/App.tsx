import "./App.css";
import { useFormik } from "formik";

function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: "Anil",
      lastName: "Atasoy",
      gender: "male",
      hobbies: [],
      country: "turkey",
    },
    onSubmit: (values) => {
       console.log(values);
    },
  });
  return (
    <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />

            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />

            <br />
            <br />

            <span>Male</span>
            <input
              name="gender"
              type="radio"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              name="gender"
              type="radio"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />

            <div>
              Football
              <input type="checkbox" name="hobbies" value="Football"  onChange={handleChange}/>
            </div>
            <div>
              Cinema
              <input type="checkbox" name="hobbies" value="Cinema"  onChange={handleChange}/>
            </div>
            <div>
              Photography
              <input type="checkbox" name="hobbies" value="Photography"  onChange={handleChange}/>
            </div>

            <br /><br />

            <select name="country" value={values.country} onChange={handleChange}>
              <option value="turkey">Turkey</option>
              <option value="england">United Kingdom</option>
              <option value="usa">USA</option>
            </select>


            <br />
            <br />
            <button type="submit">Submit</button>

            <br />
            <br />
            <code> {JSON.stringify(values)}</code>
          </form>
        )
    </>
  );
}

export default App;
