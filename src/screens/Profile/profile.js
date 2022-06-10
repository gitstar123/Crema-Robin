import { View,Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
    const navigation = useNavigation();
    const onMyOrdersPress = () => {
        navigation.navigate("MyOrders");
      };
      const onLogOutPress = () => {
        AsyncStorage.setItem("login", "false");
        navigation.navigate("SignIn");
      };
    return(
        <View>
                <Button
                    title="LogOut"
                    class= "BTN"
                    onPress={onLogOutPress}
                />
                <Button
                    title="View Orders"
                    onPress={onMyOrdersPress}
                />
        </View>
    )
}

export default Profile;