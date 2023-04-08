import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};

for (const field of formJSON) {
  initialValues[field.name] = field.value;
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
                formJSON.map(({ type, name, placeholder, label, options }) => {
                  if (type === 'input' || type === 'password' || type === 'email') {
                    return (
                      <MyTextInput
                        key={name}
                        type={(type as any)}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                      />
                    );
                  } else if (type === 'select') {
                    return (
                      <MySelect
                        key={name}
                        label={label}
                        name={name}>
                          <option value="">Select an option</option>
                          {
                            options?.map(({ id, label}) => (
                              <option key={label} value={id}>{label}</option>
                            ))
                          }
                      </MySelect>
                    )
                  }
                  throw new Error(`Type: ${type} not supported`)
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
