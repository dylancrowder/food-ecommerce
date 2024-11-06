import React from "react";

export const Error = (props) => {
  console.log(props);

  return (
    <div className="error">
      <div className="container-error">
        <h3 className="title-error-message">Error loading data</h3>
        <p className="message-error">{props.message} </p>
      </div>
    </div>
  );
};
