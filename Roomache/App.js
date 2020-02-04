import React from 'react';
import { StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { inMemoryCache } from 'apollo-cache-inmemory';
import { NETWORK_INTERFACE } from './src/config';
import configureStore from './src/redux';
import AppNavigator from './src/navigators/AppNavigator';

const client = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  cache: new inMemoryCache()
})

class App extends Component {
  render() {
    return (
      <Provider store={configureStore({})}>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </Provider>
    );
  }
}
export default App;

