import React, { Component , useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Navigation from './src/components/Navigation/Navigation';
import Test from './src/screens/Test/Test';
import CartScreen from './src/screens/CartScreen/CartScreen';


export default class App extends Component {

  
  

   render() {
     return (
       <View style={styles.container}>
        <Navigation/>
        {/* <CartScreen/> */}
        {/* <Test/> */}
       </View>
     );
   }
}
 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#F9FBFC"
   },
});
 
 