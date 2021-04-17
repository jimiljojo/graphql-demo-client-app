import {  gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query {
    customers {
      customerId
      firstName
      lastName
      email
    }
  }
`;

export const GET_ORDER_DETAILS = gql`
  query ($id : Float!) {
    ordersDetailsById(id: $id) {
      id
      quantity
      order {
        orderDate
        orderStatus
        customer {
          lastName
          firstName
          email
          account {
            name
            type
          }
        }
      }
      product{
        productName
        img_url
        currentOffer
    }
    }
  }
`;


