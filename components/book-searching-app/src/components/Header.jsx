import { Formik, Form, Field, ErrorMessage } from "formik";

function Header() {


 
  return (
    <header>
      <h1>Book Search using React</h1>
      <Formik
        initialValues={{
          searchInput: "",
        }}
        onSubmit={async (values) => {
            
        }}
      >
        <Form>
          <Field
            id="searchInput"
            name="searchInput"
            placeholder="Book Title ..."
          />
          <ErrorMessage component="div" className="errors" name="searchInput" />

          <button type="submit">
            <i className="uil uil-search"></i>
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default Header;
