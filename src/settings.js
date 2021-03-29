import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export const settings = {
  colors : {
    headerBlue: '#2627E5',
    myMessage: '#ECEDF6',
    receivedMessage: '#F7F7F8',
  }
}



export const getClient = (receivedToken) => {
  const httpLink = createHttpLink({
    uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
  });
  
  const authLink = setContext((_, { headers }) => {
  
    return {
      headers: {
        ...headers,
        authorization: receivedToken ? `Bearer ${receivedToken}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return client
}

