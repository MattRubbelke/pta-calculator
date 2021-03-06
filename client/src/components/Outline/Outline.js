import React from "react";

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
  }
  
  // This Row component lets us use a bootstrap row without having to think about class names
  export function Row({ fluid, children }) {
    return <div 
    style={{maxWidth: "960px", margin: "0 auto"}}
    className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  }
  
  // This Col component lets us size bootstrap columns with less syntax
  // e.g. <Col size="md-12"> instead of <div className="col-md-12">
  export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
  }