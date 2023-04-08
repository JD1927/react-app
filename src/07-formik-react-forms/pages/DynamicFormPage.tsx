import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any; } = {};
const requiredFields: { [key: string]: any; } = {};

for (const field of formJSON) {
  initialValues[field.name] = field.value;

  if (!field.validations) continue;

  let schema = Yup.string();

  for (const rule of field.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message);
    }
    if (rule.type === 'email') {
      schema = schema.email(rule.message);
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2, `${rule.message} ${(rule as any).value || 2} characters`
      );
    }
  }

  requiredFields[field.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Forms Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                          options?.map(({ id, label }) => (
                            <option key={label} value={id}>{label}</option>
                          ))
                        }
                      </MySelect>
                    );
                  }
                  throw new Error(`Type: ${type} not supported`);
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
