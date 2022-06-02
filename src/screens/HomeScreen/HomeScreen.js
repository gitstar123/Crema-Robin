import { Text, StyleSheet, View, FlatList, Dimensions, Image,Button, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { useState } from 'react';
import Thali from '../../../assets/images/vegThali.jpg'
import Food2 from '../../../assets/images/Food2.jpg'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData  from '../../../assets/data/categoriesData'
import popularData from "../../../assets/data/popularData";
import colors from '../../../assets/colors/colors';
Feather.loadFont();
MaterialCommunityIcons.loadFont();
const listTab = [
    {
        status: 'Patty'
    },
    {
        status: 'Thali'
    },
    {
        status: 'Chhole Bhature'
    }
]
const data = [
    {
        name: 'Veg Thali',
        price: '₹80',
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 1,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'NonVeg Thali',
        price: "₹140",
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 2,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'South Indian Thali',
        price: "₹120",
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key: 3,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'North Indian Thali',
        price: "₹70",
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 4,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'Paneer Bhature',
        price: "₹60",
        status: 'Chhole Bhature',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 5,
        about: 'Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri.'
    },
    {
        name: 'Aloo Bhature',
        price: "₹40",
        status: 'Chhole Bhature',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 6,
        about: 'Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri.'
    },
    {
        name: 'Aloo Patty',
        price: "₹20",
        status: 'Patty',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 7,
        about: 'these turnovers feature a warm potato filling enveloped in butter puff pastry, baked to perfection.'
    },
    {
        name: 'Paneer Patty',
        price: "₹30",
        status: 'Patty',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 8,
        about: 'these turnovers feature a warm paneer filling enveloped in butter puff pastry, baked to perfection. '
    },
    {
        name: 'Non Veg Patty',
        price: "₹50",
        status: 'Patty',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 9,
        about: 'these turnovers feature a meat filling enveloped in butter puff pastry, baked to perfection. '
    },

]


const HomeScreen = () => {
    const [status, setStatus] = useState('Thali');
    const [dataList, setDataList] = useState(data);
    
    const SetStatusFilter = status => {
        setDataList([...data.filter(e => e.status === status)])
        setStatus(status)
    }
    const onMyOrdersPress = () => {
        navigation.navigate('MyOrders');
    }
    const onLogOutPress = () => {
        AsyncStorage.setItem("login","false");
        navigation.navigate("SignIn");
    }

    const renderCategoryItem = ({ item }) => {
        return (
          <View
            style={[
              styles.categoryItemWrapper,
              {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
              },
            ]}>
            <Image source={item.image} style={styles.categoryItemImage} />
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
            <View
              style={[
                styles.categorySelectWrapper,
                {
                  backgroundColor: item.selected ? colors.white : colors.secondary,
                },
              ]}>
              <Feather
                name="chevron-right"
                size={8}
                style={styles.categorySelectIcon}
                color={item.selected ? colors.black : colors.white}
              />
            </View>
          </View>
        );
      };
    const navigation = useNavigation();
    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => (
                navigation.navigate('BuyScreen', {item}))
                }
                >
                <View key = {index} style = {styles.itemContainer}>
                    <View style = {styles.itemLogo}>
                        <Image
                            style = {styles.itemImage}
                            source = {Thali}
                        />
                    </View>
                    <View style = {styles.itemBody}>
                        <Text style = {styles.itemName}>{item.name}</Text>
                    </View>
                    <View style = {styles.itemStatus}>
                        <Text>{item.price}</Text>
                    </View>
                    
                </View>
                
            </TouchableOpacity>
            
        )
    }
    const separator = () => {
        return(
            <View style = {{height : 1, backgroundColor : '#f1f1f1'}}/>
        )
    }
    var flag = 0;
    return(
        <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../../../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

                {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>


        {/* <SafeAreaView style = {styles.container}>
            <Image style= { styles.backgroundImage } source={Food2}
            /> 
            <View style = {styles.listTab}>
                {
                    listTab.map(e => (
                        <>
                        <TouchableOpacity
                         style = {[styles.btnTab, status === e.status && styles.btnTabActive]}
                         onPress = {() => SetStatusFilter(e.status)}
                        >
                        <Text style = {(styles.textTab, status === e.status && styles.textTabActive)}>{e.status}</Text>
                        </TouchableOpacity>
                        </>
                    ))
                }
            </View>
            <View>
            <FlatList
                data={dataList}
                // keyExtractor = {(e,i) => i.toString()}
                renderItem = {renderItem}
                keyExtractor={item => item.key}
                ItemSeparatorComponent = {separator}
                
            />
            </View> */}
            {/* <View style={styles.bottombutton}>
                    <Button
                        title="LogOut"
                        class= "BTN"
                        onPress={onLogOutPress}
                    />
                    <Button
                        title="View Orders"
                        onPress={onMyOrdersPress}
                    />
            </View> */}
        {/* </SafeAreaView> */}
        </ScrollView>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center'
    },
    BTN :{
        margin: 12,
    },
    bottombutton: {
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
      },

    listTab : {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 20 
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    textTab: {
        fontSize : 16,
    },
    btnTabActive: {
        backgroundColor: '#E6838D'
    },
    textTabActive: {
        color: '#fff'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    itemLogo : {
        padding: 10
    },
    itemImage: {
        width: 50,
        height: 50 
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    itemStatus: {
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12
    },
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
      },
      titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
      },
      titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark,
      },
      titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
      },
      searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
      },
      search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
      },
      searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
      },
      categoriesWrapper: {
        marginTop: 30,
      },
      categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
      },
      categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
      },
      categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
      },
      categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
      },
      categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
      },
      categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
      },
      categorySelectIcon: {
        alignSelf: 'center',
      },
      popularWrapper: {
        paddingHorizontal: 20,
      },
      popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
      },
      popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
      },
      popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
      },
      popularTitlesWrapper: {
        marginTop: 20,
      },
      popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
      },
      popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
      },
      popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
      },
      addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
      },
      ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
      },
      rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,
      },
      popularCardRight: {
        marginLeft: 40,
      },
      popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
      },
});