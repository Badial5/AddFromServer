import {FormEvent, useState} from "react";

//this use state thus it is a controll component


const Form = () => {
    //using state

    const [person, setPerson] = useState({
        name: '',
        age: 0,
    })


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
   

    console.log(person)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>

          <input type="text"   className="form-control" id="name"
          value={person.name}
          onChange={(event) => setPerson({...person, name: event.target.value})}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>

          <input type="number" className="form-control" id="age" 
          value={person.age}
          onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
