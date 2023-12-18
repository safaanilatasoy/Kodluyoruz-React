import { useFormik } from "formik";
import validationSchema from "./validation";


function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,

  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        {errors.email && touched.email && (
          <div className="formValidationError">{errors.email}</div>
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="formValidationError">{errors.password}</div>
        )}

        <br />
        <br />
        <label>Confirm Password</label>
        <input
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm Password"
        />
        {errors.passwordConfirmation && touched.passwordConfirmation && (
          <div className="formValidationError">
            {errors.passwordConfirmation}
          </div>
        )}

        <br />
        <br />
        <button type="submit">Submit</button>

        <br />
        <br />
        <code> {JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;
