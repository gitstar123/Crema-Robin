import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, FlatList, Button, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import foods from '../../../assets/data/popularData';
// import {PrimaryButton} from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CartScreen = () => {
  const onMinusPress = () =>{

  }
  const onPlusPress = () => {
    
  }
  const [cartData, setCartData] = useState([]);
  const [re,setre] = useState([])
  const reas = async () => {
    try {
          setCartData((JSON.parse(await AsyncStorage.getItem('cart'))));

    } catch (e){
        console.log(e)
    }
  }
// console.log(1);
  // reas();
  const navigation = useNavigation();
  const onCheckout = () => {
    console.log("Clicked")
    navigation.navigate('PaymentOptions')
    
  }
  const CartCard = ({item}) => {
    
    
    // const returnIngredients = item.ingredients.map((link) => <Text>{link.title} </Text>);
    if (item.value !== 0) { 
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
          {/* <Text style={{fontSize: 13}}>
            {
                returnIngredients
            }
          </Text> */}
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.value}</Text>
          <View style={style.actionBtn}>
            <TouchableOpacity onPress={onMinusPress}>
              <Icon name="remove" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlusPress}>
              <Icon name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    }
    else {
      return(
        <View></View>
      )
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        {/* <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} /> */}
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={cartData}
        renderItem={({item}) =><CartCard item={item}/>}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
            <CustomButton onPress={onCheckout} text='CHECKOUT' type='primary'/>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    alignItems:"center",
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;

