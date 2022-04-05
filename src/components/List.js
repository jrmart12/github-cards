import React from "react";
import Card from "./Cards";

const List = (props) => {
  return (
    <div>
      {props.profiles.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default List;
