import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
function InfoTesla({navigation}){
return(
<View style={styles.container}>
    <View style={styles.container}>
    <Image source={{uri: 'https://logos-world.net/wp-content/uploads/2020/10/Tesla-Emblem.png'}}
       style={{height:'100%',width:'100%', alignItems:'center',alignSelf:'center'}}
       resizeMode='contain' />
    </View>
    <View style={styles.container}>
    <Text style={styles.title}>Battery: 100kWh Lithium ion</Text>
    <Text style={styles.title}>Range: 700km</Text>
    <Text style={styles.title}>Lenght: 4,980mm</Text>
    <Text style={styles.title}>Width: 2,189mm</Text>
    <Text style={styles.title}>Transmission: 1-speed</Text>
    </View>
</View>
);};
const styles = StyleSheet.create({
    title: {
        color: "#20232a",
        textAlignVertical: "center",
        textAlign:'center',
        fontSize: 30,
        fontWeight: "bold"
      },
    container: {
      flex: 1,
      justifyContent:'center',
      backgroundColor: "white",
      height:100,
      flexGrow:8
    }
});
export default InfoTesla;