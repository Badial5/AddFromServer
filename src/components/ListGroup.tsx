import {useState} from "react";

//TypeScript
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}




const ListGroup = ({items, heading, onSelectItem}: Props) => {

  

    const [selectedIndex, setSelectedIndex] = useState(-1)

   

    // if (items.length === 0) return <> <h1>List</h1> <p>No Item Found</p>  </> 


    const handleClick = (event: MouseEvent) => console.log(event)


  return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No Item Found</p>}

      <ul className="list-group">
      
            {items.map((item, index) => <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={()=> {setSelectedIndex(index); onSelectItem(item)}}> {item} </li>  )}
   
        
        </ul>
    </>
  );
};

export default ListGroup;
