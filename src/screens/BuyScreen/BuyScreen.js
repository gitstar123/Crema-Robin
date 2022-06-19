import Meal from '../../../assets/images/vegThali.jpg'
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const BuyScreen = () => {
    // console.log(route.params)
    // const itemABC = route.params.item;
    // const [userID,setID] = useState("")
    // getDataId = () => {
    //   try {
    //     AsyncStorage.getItem('userID',(err,item) => {
    //         if (item != "") {
    //             setID(item);
    //         }
    //     });
    // } catch (error) {
    //     console.log("Error retrieving data" + error);
    // }
    // }
    // getDataId();
    // const onBuy = () => {
      
    //   console.log(userID);
    //   fetch("https://nodecrema.herokuapp.com/insertorder",{
    //       method : 'POST',
    //       headers : {
    //           Accept : 'application/json',
    //           'Content-Type' : 'application/json'
    //       },

    //       mode: 'no-cors',
    //       body : JSON.stringify({
    //           userID : userID,
    //           name : itemABC.name

    //       })
    //   })
    //     .then((response)=>response.json())
    //     .then((response)=>
    //         {
    //             // var id = response[0].id;
    //             // var food = response[0].food;
    //             // console.log(id,food);

    //             alert("Succesful");
    //             // navigation.navigate('Home');
    //         }
    //     )
    //   }     
        
  return (
    <h1>fz</h1>
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: '#fff',
    //   }}>
        
    //   <SafeAreaView style={style.imageContainer}>
    //     <Image style={{flex: 1, resizeMode: 'contain'}} source ={Meal} />
    //   </SafeAreaView>
    //   <View style={style.detailsContainer}>
    //     <View
    //       style={{
    //         marginLeft: 20,
    //         flexDirection: 'row',
    //         alignItems: 'flex-end',
    //       }}>
    //       <View style={style.line} />
    //       {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text> */}
    //     </View>
    //     <View
    //       style={{
    //         marginLeft: 20,
    //         marginTop: 20,
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //       }}>
    //       <Text style={{fontSize: 22, fontWeight: 'bold'}}>{itemABC.name}</Text>
    //       <View style={style.priceTag}>
    //         <Text
    //           style={{
    //             marginLeft: 15,
    //             color: '#fff',
    //             fontWeight: 'bold',
    //             fontSize: 16,
    //           }}>
    //           {itemABC.price}
    //         </Text>
    //       </View>
    //     </View>
    //     <View style={{paddingHorizontal: 20, marginTop: 10}}>
    //       <Text style={{fontSize: 20, fontWeight: 'bold'}}>{itemABC.about}</Text>
    //       <Text
    //         style={{
    //           color: 'grey',
    //           fontSize: 16,
    //           lineHeight: 22,
    //           marginTop: 10,
    //         }}>
    //       </Text>
    //       <View
    //         style={{
    //           marginTop: 20,
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //         }}>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //           }}>
    //           <View style={style.borderBtn}>
    //             <Text style={style.borderBtnText}>-</Text>
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: 20,
    //               marginHorizontal: 10,
    //               fontWeight: 'bold',
    //             }}>
    //             1
    //           </Text>
    //           <View style={style.borderBtn}>
    //             <Text style={style.borderBtnText}>+</Text>
    //           </View>
    //         </View>
    //         <CustomButton onPress={onBuy} text='BUY' type='tertiary' bgColor="#E6838D" fgColor='#fff'/>
    //       </View>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};

// const style = StyleSheet.create({
//   header: {
//     paddingHorizontal: 20,
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   imageContainer: {
//     flex: 0.45,
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 20,
//     maxWidth: 'auto',
//     maxHeight: 200,
//     alignItems: 'center'
//   },
//   detailsContainer: {
//     flex: 0.55,
//     backgroundColor: '#fff',
//     marginHorizontal: 7,
//     marginBottom: 7,
//     borderRadius: 20,
//     marginTop: 30,
//     paddingTop: 30,
//   },
//   line: {
//     width: 25,
//     height: 2,
//     backgroundColor: '#fff',
//     marginBottom: 5,
//     marginRight: 3,
//   },
//   borderBtn: {
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 60,
//     height: 40,
//   },
//   borderBtnText: {fontWeight: 'bold', fontSize: 28},
//   buyBtn: {
//     width: 130,
//     height: 50,
//     backgroundColor: '#E6838D',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   priceTag: {
//     backgroundColor: '#E6838D',
//     width: 80,
//     height: 40,
//     justifyContent: 'center',
//     borderTopLeftRadius: 25,
//     borderBottomLeftRadius: 25,
//   },
// });

export default BuyScreen;
