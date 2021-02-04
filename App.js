import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux';
import store from './src/store';
import ShoppingCartIcon from './src/screens/ShoppingCartIcon'


 import { MaterialIcons } from '@expo/vector-icons';


import Home from './src/screens/Home';
import Cart from './src/screens/ShopingCart';
import { View ,Text} from 'react-native';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Cart: {
    screen: Cart,
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions : ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#2962FF',
    },
    headerTintColor: '#fff',
    headerRight: (props) => (
    <ShoppingCartIcon/>
    ),
  }),
  headerMode: 'screen',
});
const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
