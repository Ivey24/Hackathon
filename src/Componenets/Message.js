import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Message(props) {
 
  const { message } = props;


  return (
    <div>
      <div className="actualmessage">
        <div className="botmessage">
          <p> Hello! From Primveal Bot, </p>
        </div>
       
          <div className="human-message">
            <p>{message}</p>
          </div>
          
        
      </div>
    </div>
  );
}
