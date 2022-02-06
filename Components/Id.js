import { Picker } from "@react-native-picker/picker";
import React, {useState,useEffect} from "react";
import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity,Image, ScrollView,alert } from "react-native";
function Id ( {navigation} ) {
  const [engine,setEngine]=useState(false),
  [FrontTrunk,SetFrontTrunk]=useState(false),
  [Trunk,SetTrunk]=useState(false),
  [faruri,setFaruri]=useState(false),
  [claxon,SetClaxon]=useState('standard'),
  [selectedValue, setSelectedValue] = useState("off"),
  [battery,setBattery]=useState(101),
  [range,setRange]=useState(505)
  







  
  useEffect(()=>{


    function yourFunction(){
        // do whatever you like here
      
       setBattery(battery=>battery-1);
       setRange(range=>range-5);
       setTimeout(yourFunction, 6000);
        
    }

 yourFunction();
  },[])


  

   return(
      
  <View style={styles.container}>

 <View style={styles.pozamasina}>
          <ImageBackground source={{uri: 'https://www.porschebank.ro/media/Offers_Detail_Image_ParagraphImage_Component/1156-83946_1016-image-paragraphImage/dh-600-53678b/67b702b8/1607452769/front.jpg'}}
       style={{width: '100%', height: '100%',alignSelf:'center'}}
       resizeMode='contain'>
                <TouchableOpacity onPress={ ()=>navigation.navigate("InfoId")}>
                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/62px-Information_icon.svg.png'}}
                style={{height:62,width:62}}/>
                </TouchableOpacity>            
              </ImageBackground>
       
              </View>
      
      <View style={styles.baterie} >
    <Text textAlign='center'>{battery}%, range={range}km</Text>

</View>
<View style={styles.scrollcontainer}>
  
      <ScrollView style={styles.scrolls}>
        
        <View style={styles.card}>
            <Text style={styles.feature}>Engine:</Text>
            <TouchableOpacity
            onPress={()=>setEngine(state=>!state)}>
            <Text style={styles.feature}>{engine ? 'on' : 'off'}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.card}>
            <Text style={styles.feature}>Trunk:</Text>
            <TouchableOpacity
            onPress={()=>SetTrunk(state=>!state)}>
            <Text style={styles.feature}>{Trunk ? 'open' : 'closed'}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.card}>
            <Text style={styles.feature}>Front Trunk:</Text>
            <TouchableOpacity
            onPress={()=>SetFrontTrunk(state=>!state)}>
            <Text style={styles.feature}>{FrontTrunk ? 'open' : 'closed'}</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.card}>
            <Text style={styles.feature}>Faruri:</Text>
            <TouchableOpacity style={styles.touch}
            onPress={()=>setFaruri(state=>!state)}>
            <Text style={styles.feature}>{faruri ? 'on' : 'off'}</Text>
            </TouchableOpacity>
        </View><View style={styles.card}>
            <Text style={styles.feature}>Clima</Text>
            <View style={{flex:1}}>
     
      <Picker
        selectedValue={selectedValue}
        style={{ flex:0.5, color:'black', backgroundColor:'white',textAlign:'center',textAlignVertical:'center' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30,textAlign:'center'}} label="off" value="off" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="17" value="16" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="18" value="17" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="19" value="18" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="19" value="19" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="20" value="20" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="21" value="21" />
      </Picker>
    
    
    
    </View>    
        </View>
        <View style={styles.card}>
            <Text style={styles.feature}>Claxon:</Text>
            <Picker
        selectedValue={claxon}
        style={{ flex:1, color:'black', backgroundColor:'white',fontSize:30}}
        onValueChange={(itemValue, itemIndex) => SetClaxon(itemValue)}
      >
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}} label="Standard" value="Standard" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="European Truck" value="European Truck" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="American Truck" value="American Truck" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="European Saloon" value="European Saloon" />
        <Picker.Item style={{color:'black',backgroundColor:'white',fontSize:30}}  label="American Saloon" value="American Saloon" />
      
      </Picker>
        </View>
          </ScrollView>
          </View>
          </View>

);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: "white",
    height:100,
    flexGrow:8
  },
  scrollcontainer:{
flex:1
  },
  card: {height:88,
    borderWidth:6,
    marginHorizontal:4,
    marginVertical:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
    textAlignVertical:'center'
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
  },
  pozamasina:{
flex:1,
  },

  feature: {
      color:'black',
      textAlign:'center',
      textAlignVertical:'center',
      //borderWidth:4,
      fontSize:45
  },
  scrolls:{
    flex:1
  },
  baterie:{
    flexDirection:"row",
    justifyContent:"center",
    textAlign:"center",
    fontSize:66,
  }
});

export default Id;