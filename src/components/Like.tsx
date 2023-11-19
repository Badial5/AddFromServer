import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import Button from "./Button";


interface Props {
    love : boolean;
    handleToggle: () => void;

}


const Like = ({love, handleToggle}: Props) => {
  return (
    <div>
    {love ? (
      <AiTwotoneHeart color="red" size={40} />
    ) : (
      <AiOutlineHeart color="red" size={40} />
    )}

    <div>
    <Button onClick={handleToggle}>Like</Button>
    </div>


  </div>
  )
}

export default Like
