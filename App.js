import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Profile from './Profile';
import reducers from './reducers';

const Stack = createStackNavigator();
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Profile" component={Profile} />
       </Stack.Navigator>
     </NavigationContainer>
    </Provider>
  );
}
export default App;
