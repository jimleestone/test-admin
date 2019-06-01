import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/jimleestone/json-server');
const App = () => (
     <Admin dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
      </Admin>

)

export default App;