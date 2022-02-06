import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Cars({navigation} ) {
  return(
  <View style={styles.container}>
  
  <View style={styles.card}>
  <TouchableOpacity style={styles.touch}   onPress={ ()=>navigation.navigate("ModelS") }>
  <Image source={{uri: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1ocjZ1ZDBueDgybzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.eT4bbHYCiWG7joTUGa7_HZ79tE76JcE1A3L_CEhT3O4/image;s=1080x720'}}
       style={{width: 111, height: 100,alignItems:'center',alignSelf:'center'}}
       resizeMode='contain' />
    <Text style={styles.title}>Tesla Model S</Text>
    </TouchableOpacity>
  </View>
  
    
  <View style={styles.card}>

    <TouchableOpacity style={styles.touch}   onPress={ ()=>navigation.navigate("Id") } >
  <Image source={{uri: 'https://www.porschebank.ro/media/Offers_Detail_Image_ParagraphImage_Component/1156-83946_1016-image-paragraphImage/dh-600-53678b/67b702b8/1607452769/front.jpg'}}
       style={{width: '50%', height: '100%',alignSelf:'center'}}
       resizeMode='contain' />
  <Text style={styles.title}>VW ID4</Text>
  </TouchableOpacity>
</View>

</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23,
    top:22,
    bottom:22,
    paddingVertical:33,
    justifyContent:'space-evenly',
    backgroundColor: "white",
  },
  card: {flex: 2,
    height:'10%',
    borderWidth:6,
    marginHorizontal:4,
    marginVertical:136,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  touch: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  title: {
    color: "#20232a",
    textAlignVertical: "center",
    textAlign:'center',
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default Cars;