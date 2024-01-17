import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

export default function App() {
  console.log('App.js, Constants: ', Constants.expoConfig);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
