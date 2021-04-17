import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {GET_ORDER_DETAILS} from '../GraphQL/Queries'

const GetOrderDetails = (props) =>{  
  const { loading, error, data } = useQuery(GET_ORDER_DETAILS, {variables: { id : props.orderID }});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  
  
      return data.ordersDetailsById.map(({ id, quantity, order , product}) => (
        <div className="card">
          <div className="card-body text-center">
            <table className="table">
              <th> ID </th>
              <th> Products (PIM)</th>
              <th> IMG (PIM)</th>
              <th> Offer (PIM)</th>
              <th> Quantity (OMS)</th>
              <th> Order Date (OMS)</th>
              <th> Order Status (OMS)</th>
              <th> Customer Name (SFDC)</th>
              <th> Account Name (SFDC)</th>
              <tr>
                <td>{id}</td>
                <td>{product.productName}</td>
                <td><img src={product.img_url} width="100" height="100"></img></td>
                <td>{product.currentOffer}</td>
                <td>{quantity}</td>
                <td>{order.orderDate}</td>
                <td>{order.orderStatus}</td>
                <td>{order.customer.firstName + ' ' + order.customer.lastName}</td>
                <td>{order.customer.account.name}</td>
              </tr>
            </table>
          </div>
        </div>
      ));

}

export default GetOrderDetails;
