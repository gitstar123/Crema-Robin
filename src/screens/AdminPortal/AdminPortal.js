import { Text, StyleSheet, View, Dimensions, FlatList, Image, Button, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useEffect } from "react";



const MyOrders = () => {

    const [dataList, setDataList] = useState();

    
    
    useEffect(async () => {
        fetch("https://nodecrema.herokuapp.com/checkallorders",{
            method : 'POST',
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            },

            mode: 'no-cors',
            body : JSON.stringify()
        })
            .then((response) => response.json())
            .then((response) => {
                setDataList(response);

           }
            );
    })

    const renderItem = ({ item, index }) => {
        const OnRemoveOrderPress = () => {
           
        }
    
    return (

        <View key={index} style={styles.itemContainer}>
            <View style={styles.itemBody}>
                <Text style={styles.itemName}>{item.Name}</Text>
            </View>
            <View style={styles.itemBody}>
                <Text style={styles.itemName}>{item.ID}</Text>
            </View>
            <View style={styles.itemStatus}>
                <Text>{item.id}</Text>
            </View>
            <Button onPress={OnRemoveOrderPress} title='Completed' color='#841584' />
        </View>
    )
}
const navigation = useNavigation();
const separator = () => {
    return (
        <View style={{ height: 1, backgroundColor: '#f1f1f1' }} />
    )
}

return (
    <SafeAreaView>
        {/* <View>
            <CustomButton onPress={OnButtonViewPress} text='Refresh' type='primary' />
        </View> */}
        <FlatList
            data={dataList}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={separator}

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