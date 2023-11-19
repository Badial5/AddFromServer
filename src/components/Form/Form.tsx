import {FieldValues} from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

//this use React Hook Form thus it is a controll component


const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 character(s)"}),
    age: z.number({invalid_type_error: "Age field is required"}).min(18, {message: "You must be 18 year(s) and above"}),
})


//zod allows us to cancel this
// interface FormData {
//     name: string;
//     age: number;
// }


type FormData =  z.infer<typeof schema>





const Form = () => {
    //using useForm

    const {register, reset, handleSubmit,  formState: {errors, isValid, isSubmitting,}}  = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FieldValues) => { console.log("Form Data: ", data) 
   
    reset()   
    }



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>

          <input type="text"   className="form-control" id="name"
        //   value={person.name}
        //   onChange={(event) => setPerson({...person, name: event.target.value})}
        {...register("name")}
          />

          <p> {errors.name && <p className="text-danger"> {errors.name.message} </p>} </p>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>

          <input type="number" className="form-control" id="age" 
        //   value={person.age}
        //   onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
        {...register("age", {valueAsNumber: true})}

          />

        <p> {errors.age && <p className="text-danger"> {errors.age.message} </p>} </p>

        </div>

        <button className="btn btn-primary" type="submit" disabled={!isValid} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
