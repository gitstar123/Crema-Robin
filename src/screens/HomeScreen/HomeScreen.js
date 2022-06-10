import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Thali from "../../../assets/images/vegThali.jpg";
import Food2 from "../../../assets/images/Food2.jpg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import categoriesData from "../../../assets/data/categoriesData";
import popularData from "../../../assets/data/popularData";
import colors from "../../../assets/colors/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Profile/profile";
import vegicon from "../../../assets/images/vegicon.png";
import { Colors } from "react-native/Libraries/NewAppScreen";
Feather.loadFont();
MaterialCommunityIcons.loadFont();
const listTab = [
  {
    status: "Snacks",
  },
  {
    status: "Lunch",
  },
  {
    status: "Drinks",
  },
];
const data = [
  {
    name: "Chips",
    price: "₹80",
    title: "Snacks",
    source: require("../../../assets/images/vegThali.jpg"),
    key: 1,
    about:
      "Thali (meaning plate) or Bhojanam is a round platter used to serve food",
  },
  {
    name: "Maggi",
    price: "₹140",
    title: "Lunch",
    source: require("../../../assets/images/vegThali.jpg"),
    key: 2,
    about:
      "Thali (meaning plate) or Bhojanam is a round platter used to serve food",
  },
  {
    name: "Pepsi",
    price: "₹120",
    title: "Drinks",
    source: require("../../../assets/images/vegThali.jpg"),
    key: 3,
    about:
      "Thali (meaning plate) or Bhojanam is a round platter used to serve food",
  },
];

const HomeScreen = () => {
  const [status, setStatus] = useState("Snacks");
  const [allDataList, setAllDataList] = useState(popularData);
  const [dataList, setDataList] = useState([
    ...allDataList.filter((e) => e.title === "Snacks"),
  ]);
  const [cartItems, setCartItems] = useState([]);

  const [renderid, setId] = useState("1");

  const setNewDataList = (title) => {
    setDataList([...popularData.filter((e) => e.title === title)]);
    setStatus(title);
  };

  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("BuyScreen", { item })}
        >
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemLogo}>
              <Image style={styles.itemImage} source={Thali} />
            </View>
            <View style={styles.itemBody}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View style={styles.itemStatus}>
              <Text>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
  };
  const onGoToCart = () => {
    navigation.navigate("Cart");
  };
  const [val, setVal] = useState(0);
  const onAddPress = (item) => {
    // setAllDataList(allDataList.map((x) => x.id === item.id?  {...ob,value: ob.value++} : x));
    for (const i in allDataList) {
      if (allDataList[i] == item) {
        allDataList[i].value++;
        break;
      }
    }
    setAllDataList(allDataList);
    // item.value++;

    AsyncStorage.setItem("cart",JSON.stringify(cartItems.push(item)))
  };
  const onPlusPress = (item) => {
    for (const i in allDataList) {
      if (allDataList[i] == item) {
        allDataList[i].value++;
        break;
      }
    }
    setAllDataList(allDataList);

    for (const i in cartItems) {
      if (cartItems[i].id === item.id) {
        cartItems[i].value++;
        break;
      }
    }
    AsyncStorage.setItem(
      "cart", JSON.stringify(cartItems)
    );
    };

  const onMinusPress = (item) => {
    for (const i in allDataList) {
      if (allDataList[i] == item) {
        allDataList[i].value--;
        break;
      }
    }
    setAllDataList(allDataList);
    for (const i in cartItems) {
      if (cartItems[i].id === item.id) {
        cartItems[i].value--;
        break;
      }
    }
    AsyncStorage.setItem(
      "cart", JSON.stringify(cartItems)
    );
  };
  var flag = 0;
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Feather name="menu" size={24} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Hi,</Text>
          <Text style={styles.titlesTitle}>What's on your tongue?</Text>
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
            <ScrollView horizontal={true}>
              <View style={styles.listTab}>
                {categoriesData.map((e) => (
                  <>
                    <TouchableOpacity key={e.id}
                      style={[
                        styles.categoryItemWrapper,
                        {
                          backgroundColor:
                            e.id == renderid ? colors.primary : colors.white,
                          marginLeft: e.id == 1 ? 20 : 0,
                        },
                      ]}
                      onPress={() => {
                        setNewDataList(e.title);
                        setId(e.id);
                        console.log(e.id);
                      }}
                    >
                      <Image
                        source={e.image}
                        style={styles.categoryItemImage}
                      />
                      <Text style={styles.categoryItemTitle}>{e.title}</Text>
                      <Text
                        style={
                          (styles.textTab,
                          status === e.status && styles.textTabActive)
                        }
                      >
                        {e.status}
                      </Text>
                      <View
                        style={[
                          styles.categorySelectWrapper,
                          {
                            backgroundColor:
                              e.id == renderid
                                ? colors.white
                                : colors.secondary,
                          },
                        ]}
                      >
                        <Feather
                          name="chevron-down"
                          size={15}
                          style={styles.categorySelectIcon}
                          color={
                            e.id == renderid ? colors.secondary : colors.white
                          }
                        />
                      </View>
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Food items */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>All</Text>
          {dataList.map((item) => (
            <View key={item.id} style={[styles.popularCardWrapper]}>
              <View style={styles.popularCardLeft}>
                <Image source={item.image} style={styles.popularCardImage} />
              </View>

              <View style={styles.popularCardRight}>
                <View styles={styles.popularCardTopRight}>
                  <View style={styles.popularTopWrapper}>
                    <Image source={vegicon} style={styles.vegicon} />
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.secondary}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>

                  <Text style={styles.popularTitlesTitle}>{item.title}</Text>

                  <Text style={styles.popularTitlesWeight}>
                    in {item.title}
                  </Text>
                </View>
                { item.value === 0 ? (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => onAddPress(item)}
                  >
                    <View style={styles.popularCardBottom}>
                      <View style={styles.addPizzaButton}>
                        <Text>Add+</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.popularCardBottom}>
                    <View style={styles.actionBtn}>
                      <TouchableOpacity
                        onPress={() => {
                          onMinusPress(item);
                        }}
                      >
                        <Icon name="remove" size={25} color={Colors.white} />
                        
                      </TouchableOpacity>
                      <Text >
                        {
                          allDataList[
                            allDataList.findIndex((x) => {
                             return x.id === item.id;
                            })
                          ].value
                        }
                      </Text>
                      {console.log("hi")}
                      <TouchableOpacity onPress={() => onPlusPress(item)}>
                        <Icon name="add" size={25} color={Colors.white} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </View>

            // </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={onGoToCart}>
        <View style={styles.floatingContainer}>
          <Text>Go to Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  BTN: {
    margin: 12,
  },
  floatingContainer: {
    backgroundColor: "yellow",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
  },
  floatingButton: {
    width: "60%",
    position: "absolute",
    bottom: "7%",
    left: "20%",
  },
  bottombutton: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 10,
  },

  listTab: {
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#E6838D",
  },
  textTabActive: {
    color: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  itemLogo: {
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
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
    // fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
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
    // fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  categoryItemWrapper: {
    backgroundColor: "#F5CA48",
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
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    // fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",

    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularCardRight: {
    alignItems: "flex-end",
  },
  popularCardTopRight: {
    paddingHorizontal: 0,
  },
  popularTopWrapper: {
    flexDirection: "row-reverse",
  },
  popularTopText: {
    // alignItems : "right",
    // fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  vegicon: {
    width: 30,
    height: 30,
    // alignItems : "center",
    marginLeft: 10,
  },
  popularTitlesTitle: {
    // fontFamily: 'Montserrat-SemiBold',

    fontSize: 20,
    color: colors.textDark,
    alignSelf: "flex-end",
    marginVertical: 7,
  },
  popularTitlesWeight: {
    // fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 7,
    alignSelf: "flex-end",
  },
  popularCardBottom: {
    alignItems: "center",
    marginTop: 0,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  actionBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 18,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    // fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
  },
  popularCardLeft: {
    marginLeft: -20,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});
