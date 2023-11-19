import {ReactNode} from 'react'

interface Props {
    children: ReactNode;
    onClick: () => void;
    color?: "primary" | "secondary" | "success" | "danger";
}


const Button = ({children, onClick, color = "danger"} : Props) => {
  return (
    <>
      <button type="button" className={`btn btn-${color}` } onClick={onClick}>{children}</button>
    </>
  )
}

export default Button
