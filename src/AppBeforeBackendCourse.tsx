import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ProductList from "./components/ProductList";

let items = ["New York", "Accra", "Kumasi", "London", "Paris"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

const App = () => {
  const [alert, setAlert] = useState(false);
  const [love, setLove] = useState(false);

  //connecting it to the backend
  const [category, setCategory] = useState('')

  //sharing state
  const [cartItems, setCartItems] = useState(["Product1", "Product2"])


  const handleToggle = () => (
    setLove(!love)
  )

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}

      {/* <Alert text='Hello World'/> */}

      {/* {alert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            onClick={() => setAlert(false)}
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <Button onClick={() => setAlert(true)}>Alert</Button>

      <Like love={love} handleToggle={handleToggle} /> */}

      {/* Sharing Component  */}

      {/* <NavBar cartItemsCount={cartItems.length} />

      <Cart cartItems={cartItems} onClear={() => setCartItems([])}  onAdd={() => setCartItems(["Product1", "Product2"])} /> */}

      {/* <Form /> */}

      {/* <ExpenseList /> */}

      <select  className="form-select" onChange={(e) => setCategory(e.target.value)}> 
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
        {/* <option value=""></option> */}
      </select>

      <ProductList category={category} /> 
    </div>
  );
};

export default App;
