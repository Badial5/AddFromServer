import {FieldValues} from "react";
import { useForm } from "react-hook-form";

//this use React Hook Form thus it is a controll component

interface FormData {
    name: string;
    age: number;
}



const FormuseForm = () => {
    //using useForm

    const {register, handleSubmit, formState: {errors}}  = useForm<FormData>()

    const onSubmit = (data: FieldValues) => console.log(data)



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
        {...register("name", {required: true, minLength: 3})}
          />

          <p> {errors.name?.type === 'required' && <p className="text-danger"> The name field is required</p>} </p>

          <p> {errors.name?.type === 'minLength' && <p className="text-danger">The name is too short</p>} </p>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>

          <input type="number" className="form-control" id="age" 
        //   value={person.age}
        //   onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
        {...register("age")}

          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormuseForm;
