import Vue from 'vue';
import App from './App.vue';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import VueApollo from 'vue-apollo';

const renderer = require('vue-server-renderer').createRenderer();

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id,
});

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
});

// Start the app
const vm = new Vue({
  render: h => h(App)
});

renderer.renderToString(vm, (err, html) => {
  if (err){
    console.error(err.message);
    console.error(err.stack);
  }
  console.log(html);
});
