import { Text, StyleSheet, View, Dimensions, FlatList, Image,Button, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";



const MyOrders = () => {

    const [dataList, setDataList] = useState();
    const [userID,setid] = useState("")
    getDataId = async () => {
      try {
          setid (await AsyncStorage.getItem('userID'))
      } catch (e){
          console.log(e)
      }
    }
    getDataId();
    const OnButtonViewPress = (data) =>{
        
        fetch("https://nodecrema.herokuapp.com/checkorders",{
            method : 'POST',
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            },

            mode: 'no-cors',
            body : JSON.stringify({
                userID : userID

            })
        })
        .then((response)=>response.json())
        .then((response)=>
            {
                console.log(response)
                setDataList(response);
                
                // response[0].Message == "1" ? navigation.navigate('Home',{id}) : alert("Incorrect Email or password");
            }
        );

    }

        const renderItem = ({item, index}) => {
            return (
            
                    <View key = {index} style = {styles.itemContainer}>
                        <View style = {styles.itemBody}>
                            <Text style = {styles.itemName}>{item.Name}</Text>
                        </View>
                        <View style = {styles.itemStatus}>
                            <Text>{item.ID}</Text>
                        </View>
                    </View>
            )
        }
    const navigation = useNavigation();
    const separator = () => {
        return(
            <View style = {{height : 1, backgroundColor : '#f1f1f1'}}/>
        )
    }
    console.log(dataList);
    return (
        
        <SafeAreaView>
            <View>
                <CustomButton onPress={OnButtonViewPress} text='Refresh' type='primary'/>
            </View>
                <FlatList
                data={dataList}
                keyExtractor = {(e,i) => i.toString()}
                renderItem = {renderItem}
                ItemSeparatorComponent = {separator}
            />
        </SafeAreaView>
    )
};

export default MyOrders;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginVertical: 10,
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    itemStatus: {
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12
    }
})