import React from "react";

interface Props {
    // text: string
    children: string;

}



const Alert = (
    // {text}: Props
    {children} : Props
    ) => {
  return (
    <div className="alert alert-primary" role="alert">
      {/* {text} */}
      {children}
    </div>
  );
};

export default Alert;
