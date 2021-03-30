import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { token } from '../token';


export const settings = {
  colors : {
    headerBlue: '#2627E5',
    myMessage: '#ECEDF6',
    receivedMessage: '#F7F7F8',
  }
}
  const httpLink = createHttpLink({
    uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
  });

  const wsLink = new WebSocketLink({
    uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
    options: {
      reconnect: true,
      connectionParams: {
        authToken: token,
      },
    }
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );
  
  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  export const client = new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache()
  });


