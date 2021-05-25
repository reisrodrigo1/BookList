import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './src/view/Home';
import Book from './src/view/Book';
import Detail from './src/view/Detail';
import NavBar from './src/components/NavBar'
import Search from './src/view/Search';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Book,
    Detail,
    NavBar,
    Search
  })
);

export default function App() {
  return <Routes />
}
