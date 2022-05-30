import { ScrollView, TextInput, StyleSheet , Text , View} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import React, { useState } from "react";

import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native";
const AdminLogin = () => {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const navigation = useNavigation();
    const onAdminSubmit = () => {

        fetch("https://nodecrema.herokuapp.com/checkadmin",{
            method : 'POST',
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            },

            mode: 'no-cors',
            body : JSON.stringify({
                email : email,
                password : password

            })
        })
            .then((response)=>response.json())
            .then((response)=>
                {
                    console.log(response);
                    response == 1 ? navigation.navigate('AdminPortal') : alert("Incorrect Email or password");
                }
            );
    }
    const [password, setPassword] = useState('');
    const [email, setEmailId] = useState('');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.container}>
            <Text style = {styles.heading}>Admin Login</Text>
            <TextInput
                value={email}
                onChangeText={setEmailId}
                placeholder="Email"
                style={styles.input}
                secureTextEntry={false} />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.input}
                secureTextEntry={false} />

            <CustomButton onPress={handleSubmit(onAdminSubmit)} text='Submit' type='primary' />
            </View>
        </ScrollView>
    );
}

export default AdminLogin;

const styles = StyleSheet.create({
    heading:{
        fontSize: 30,
        color: 'silver',
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 100
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
    
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
    
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    container: {
        alignContent: 'center',
        justifyContent: 'center'
    }
});