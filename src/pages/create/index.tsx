import { Field, Form, Formik } from "formik"
import type { FC } from "react"
import { initialValues, inputs } from "../../utils/constansts"
import { schema } from "../../utils/schema"
import { useCreatePlace } from "../../utils/service"
import type { PlaceData } from "../../types"


const Create:FC = () => {
// Kullanıcı formu submit ettiğinde mutate fonksiyonunu çağır
const {mutate ,isPending} = useCreatePlace()

// Form submit edildiğinde handleSubmit fonksiyonu çağrılır
const handleSubmit = (values: PlaceData) => {
  mutate(values);
  }
  return (
    <div className="container">
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>

      {({errors,touched}) => (
         <Form className="max-w-2xl mx-auto grid gap-2">
        {inputs.map((input,key) => (
          <div key={key} className="field">
            <label>{input.label}</label>
            <Field name={input.name} placeholder={input.placeholder} type={input.type || "text"} 
            className="input" />

            {errors[input.name as keyof typeof errors] && 
            touched[input.name as keyof typeof touched] ? (
              <span className="text-red-500 text-sm">{errors[input.name as keyof typeof errors]}</span>
            ) : (
              <span className="text-transparent select-none text-sm">.</span>
            )
            }
          </div>
        ))}
   
    

        <button
           disabled={isPending}
          type="submit"
          className="my-5 bg-blue-500 py-2 px-6 text-white rounded-md transition hover:bg-blue-600"
        >
          Gönder
        </button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default Create