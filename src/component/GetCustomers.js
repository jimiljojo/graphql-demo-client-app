import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../GraphQL/Queries'

const GetCustomers = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.customers.map(({ customerId, firstName, lastName, email }) => (
    <div className="card">
      <div className="card-body text-center">
        <a href={"https://datagraph-mulesoft-demo-org.lightning.force.com/lightning/r/Contact/" + customerId + "/view"} target="_blank">
          <h5 className="mb-0">{firstName} {lastName}</h5>
        </a>
        <p>{email}</p>
      </div>
    </div>
  ));
}

export default GetCustomers;
