import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Navigation from './src/components/Navigation/Navigation';
import Test from './src/screens/Test/Test';
export default class App extends Component {
   render() {
     return (
       <View style={styles.container}>
        {/* <Navigation/> */}
        <Test/>
       </View>
     );
   }
}
 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FBFC"
   },
});
 
 