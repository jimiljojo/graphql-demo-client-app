import React, { useState } from 'react';
import GetOrderDetails from '../component/GetOrderDetails';
import Explainer from '../component/Explainer';
import {GET_ORDER_DETAILS} from '../GraphQL/Queries'

const OrderDetails = () => {
  const [orderID, setorderID] = useState(1) ;
  const handleSubmit = e => {
    setorderID(parseInt(e.target[0].value));
    e.preventDefault();
  }

  const handleChange = e => {
    setorderID(e.target.value)
  }
  return (
    <div>
      <Explainer query={GET_ORDER_DETAILS}/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input type="text" value={orderID} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <GetOrderDetails orderID={orderID} />
    </div>
  );
}

export default OrderDetails;
