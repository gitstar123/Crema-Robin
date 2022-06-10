import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import BuyScreen from '../../screens/BuyScreen/BuyScreen';
import MyOrders from '../../screens/MyOrders/MyOrders';
import Profile from '../../screens/Profile/profile';
import CartScreen from '../../screens/CartScreen/CartScreen';



const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    // <NavigationContainer  independent = {true}>
      <Tab.Navigator 
        initialRouteName={"Home"}
        // screenOptions= {({route}) => (() => ({headerShown:false}))}
        screenOptions={
            ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Profile") {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === "Myorders") {
              iconName = focused ? 'settings' : 'settings-outline';
            }
              else if(rn === "Cart") {
              iconName = focused ? 'cart' : 'cart-outline'; 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },}
        )}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Cart"} component={CartScreen} />
        <Tab.Screen name={"Profile"} component={Profile} />
        <Tab.Screen name={"Myorders"} component={MyOrders} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default MainContainer;