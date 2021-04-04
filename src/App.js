import * as React from "react";
import {Admin, ListGuesser, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
 
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="photos" list={ListGuesser}></Resource>
  </Admin>
)

export default App;