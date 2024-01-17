import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

// console.log('ApolloClient, Contants: ', Constants.expoConfig.extra);
// console.log('ApolloClient, Contants: ', Constants.expoConfig.extra.apolloUri);
const httpLink = createHttpLink({
  uri: Constants.expoConfig.extra.apolloUri,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
