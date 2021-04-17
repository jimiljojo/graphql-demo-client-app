import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import './App.css';
import Main from './layout/Main'


//this creates a URL with the required headers for auth
const datagraph_url = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  headers: {
    'client_id': process.env.REACT_APP_CLIENT_ID,
    'client_secret': process.env.REACT_APP_CLIENT_SECRET
  }
});
//create an apollo client to make GQLcalls
const client = new ApolloClient({
  link: datagraph_url,
  cache: new InMemoryCache()
});




function App() {
  return (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
  );
}

export default App;
