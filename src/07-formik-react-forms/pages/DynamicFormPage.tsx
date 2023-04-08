import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MyTextInput } from '../components';

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Forms Page</h1>
      <Formik
        initialValues={{
          name: 'John'
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          (formik) => (
            <Form>
              {
                formJSON.map(({ type, name, placeholder, label }) => {
                  return (
                    <MyTextInput
                      key={name}
                      type={(type as any)}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                    />
                  );
                })
              }
              <button type="submit">SUBMIT</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
