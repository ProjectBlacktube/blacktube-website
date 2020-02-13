import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost/graphql',
});

export default client;
