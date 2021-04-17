import React from 'react';
import { print } from 'graphql';


const Explainer = (props) => { 
  
  return (
    <div className="explainer" style={{whiteSpace: "pre-wrap"}}>
      <p>Query: 
        {(print(props.query))}
      </p>      
      

    </div>
  )
}

export default Explainer;
