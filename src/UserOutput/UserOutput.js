import React from "react";
import "./UserOuput.css";

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>UserName: {props.userName}</p>
      <p>Paragraph Two. </p>
    </div>
  );
};

export default UserOutput;
