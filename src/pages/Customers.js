import React from 'react';
import Explainer from '../component/Explainer';
import GetCustomers from '../component/GetCustomers'
import { GET_CUSTOMERS } from '../GraphQL/Queries'


const Customers = () => {
  return (
    <div className="customers">      
      <Explainer query={GET_CUSTOMERS}/>
      <div className="card-deck">
        <GetCustomers/>
      </div>
    </div>
  )
}

export default Customers;
