import {FormEvent, useRef} from "react";

//this use Ref


const Form = () => {
    //using useRef
    const nameRef = useRef<HTMLInputElement>(null)

    const ageRef = useRef<HTMLInputElement>(null)

     const person = {name: '', age: 0}


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
      if (nameRef.current !== null) {
        person.name = (nameRef.current.value)
      }

      if (ageRef.current !== null) {
        person.age =  parseInt(ageRef.current.value)
      }

    console.log(person)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text"  ref={nameRef}  className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" className="form-control" id="age" ref={ageRef} />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
