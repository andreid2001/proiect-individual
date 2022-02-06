import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
function InfoId({navigation}){
return(
<View style={styles.container}>
    <View style={styles.container}>
    <Image source={{uri: 'https://logos-world.net/wp-content/uploads/2021/04/Volkswagen-Logo-1948-1960.png'}}
       style={{height:'100%',width:'100%', alignItems:'center',alignSelf:'center'}}
       resizeMode='contain' />
    </View>
    <View style={styles.container}>
    <Text style={styles.title}>Battery: 82kWh Lithium ion</Text>
    <Text style={styles.title}>Range: 500km</Text>
    <Text style={styles.title}>Lenght: 4,584mm</Text>
    <Text style={styles.title}>Width: 1,852mm</Text>
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
export default InfoId;