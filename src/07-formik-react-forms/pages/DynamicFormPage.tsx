import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};

for (const field of formJSON) {
  initialValues[field.name] = field.value;
  console.log(initialValues);
}

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Forms Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          ({ handleReset }) => (
            <Form noValidate>
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
              <button type="button" onClick={handleReset}>RESET</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
